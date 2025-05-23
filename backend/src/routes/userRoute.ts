import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { Hono } from 'hono'
import { sign } from 'hono/jwt';
import { SignInInput, SignUpInput } from '@javed-ak/medium-common-app';

export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string
    JWT_SECRET: String
  }
}>();

userRouter.get('/', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  const users = await prisma.user.findMany();
  return c.json({ users });
})

userRouter.post('/signup', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())
  const body = await c.req.json();
  const { success } = SignUpInput.safeParse(body);
  if (!success) {
    c.status(411);
    return c.json({ error: 'Invalid Inputs!' })
  }
  try {
    const user = await prisma.user.create({
      data: {
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        password: body.password
      }
    })

    const token = await sign({ id: user.id }, c.env.JWT_SECRET);
    const jwt_token = `Bearer ${token}`;
    return c.json({ token: jwt_token })
  } catch (err) {
    c.status(411);
    return c.json({ message: 'Something went worng!' + err })
  }
})

userRouter.post('/signin', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())
  const body = await c.req.json();
  const { success } = SignInInput.safeParse(body);
  if (!success) {
    c.status(411);
    return c.json({ error: 'Invalid Inputs!' })
  }
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: body.email,
        password: body.password
      }
    })
    if (!user) {
      return c.json({ message: "User not found" });
    }

    const token = await sign({ id: user.id }, c.env.JWT_SECRET);
    const jwt_token = `Bearer ${token}`;
    return c.json({ token: jwt_token })
  } catch (err) {
    c.json({ message: "Something went wrong!" })
  }
})
