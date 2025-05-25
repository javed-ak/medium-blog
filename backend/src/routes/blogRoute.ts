import { Hono } from "hono";
import { verify } from "hono/jwt";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { CreatePostInput, UpdatePostInput } from "@javed-ak/medium-common-app";

export const blogRouter = new Hono<{
    Bindings: {
        JWT_SECRET: string,
        DATABASE_URL: string
    },
    Variables: {
        validate: string
        userId: any
    }
}>();

blogRouter.use('/*', async (c, next) => {
    const jwt = c.req.header('Authorization');
    if (!jwt) {
        c.status(411);
        return c.json({ error: 'Unauthorized' })
    }
    const token = jwt.split(" ")[1];
    const validate = await verify(token, c.env.JWT_SECRET);


    if (!validate) {
        c.status(411);
        return c.json({ error: 'Unauthorized' })
    }
    c.set('userId', validate.id)
    await next();
})

blogRouter.post('/', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const userId = c.get('userId');
    const body = await c.req.json();
    const { success }  = CreatePostInput.safeParse(body);
    if(!success) {
        c.status(411);
        return c.json({error: 'Invalid Inputs!'});
    } 
    try {
        const post = await prisma.post.create({
            data: {
                title: body.title,
                content: body.content,
                author_id: userId
            }
        })
        return c.json({Post: post.id})
    } catch (err) {
        c.status(411);
        return c.json({error: 'Something went wrong!'})
    }
})

blogRouter.put('/', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const userId = c.get('userId');
    const body = await c.req.json();
    const { success } = UpdatePostInput.safeParse(body);
    if(!success) {
        c.status(411);
        return c.json({error: 'Invalid Inputs!'});
    }
    try {
        await prisma.post.update({
            where: {
                id: body.id,
                author_id: userId
            }, 
            data: {
                title: body.title,
                content: body.content
            }
        })
        return c.json({success: 'Post updated'})
    } catch (err) {
        c.status(411);
        return c.json({error: 'Something went wrong!'})
    }
})

blogRouter.get('/', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    try{
        const posts = await prisma.post.findMany({
            select: {
                id: true,
                title: true,
                content: true,
                publishedAt: true,
                author: {
                    select: {
                        firstName: true
                    }
                }
            }
        });
        return c.json({posts})
    } catch (err) {
        c.status(411);
        return c.json({error: 'Something went wrong!'})
    }
})

blogRouter.get('/:id', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const id = parseInt(c.req.param('id'));
    try {
        const post = await prisma.post.findUnique({
            where: {
                id: id
            }, 
            select: {
                id: true,
                title: true,
                content: true,
                publishedAt: true,
                author: {
                    select: {
                        firstName: true,
                        lastName: true
                    }
                }
            }
        })
        return c.json({post})
    } catch (err) {
        c.status(411);
        return c.json({error: 'Something went wrong!'})
    }
})