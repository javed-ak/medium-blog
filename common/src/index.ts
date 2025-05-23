import zod from 'zod';

const SignUpInput = zod.object({
    firstName: zod.string(),
    lastName: zod.string(),
    email: zod.string().email(),
    password: zod.string().min(6)
})

type SignUpType = zod.infer<typeof SignUpInput>;

const SignInInput = zod.object({
    email: zod.string().email(),
    password: zod.string().min(6)
})

type SignInType = zod.infer<typeof SignInInput>;

const CreatePostInput = zod.object({
    title: zod.string().min(3),
    content: zod.string()
})

type CreatePostType = zod.infer<typeof CreatePostInput>;

const UpdatePostInput = zod.object({
    id: zod.number(),
    title: zod.string().min(3),
    content: zod.string()
})

type UpdatePostType = zod.infer<typeof UpdatePostInput>;

export {
    SignUpInput, SignUpType,
    SignInInput, SignInType,
    CreatePostInput, CreatePostType,
    UpdatePostInput, UpdatePostType
}