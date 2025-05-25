import { Hono } from "hono";
import { userRouter } from "./routes/userRoute";
import { blogRouter } from "./routes/blogRoute";
import { cors } from 'hono/cors'

const app = new Hono();

app.use('/*', cors());
app.route('/api/v1/user', userRouter);
app.route('/api/v1/blog', blogRouter);

export default app;