import zod from 'zod';
declare const SignUpInput: zod.ZodObject<{
    firstName: zod.ZodString;
    lastName: zod.ZodString;
    email: zod.ZodString;
    password: zod.ZodString;
}, "strip", zod.ZodTypeAny, {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}, {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}>;
type SignUpType = zod.infer<typeof SignUpInput>;
declare const SignInInput: zod.ZodObject<{
    email: zod.ZodString;
    password: zod.ZodString;
}, "strip", zod.ZodTypeAny, {
    email: string;
    password: string;
}, {
    email: string;
    password: string;
}>;
type SignInType = zod.infer<typeof SignInInput>;
declare const CreatePostInput: zod.ZodObject<{
    title: zod.ZodString;
    content: zod.ZodString;
}, "strip", zod.ZodTypeAny, {
    title: string;
    content: string;
}, {
    title: string;
    content: string;
}>;
type CreatePostType = zod.infer<typeof CreatePostInput>;
declare const UpdatePostInput: zod.ZodObject<{
    id: zod.ZodNumber;
    title: zod.ZodString;
    content: zod.ZodString;
}, "strip", zod.ZodTypeAny, {
    title: string;
    content: string;
    id: number;
}, {
    title: string;
    content: string;
    id: number;
}>;
type UpdatePostType = zod.infer<typeof UpdatePostInput>;
export { SignUpInput, SignUpType, SignInInput, SignInType, CreatePostInput, CreatePostType, UpdatePostInput, UpdatePostType };
