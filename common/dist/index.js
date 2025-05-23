"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePostInput = exports.CreatePostInput = exports.SignInInput = exports.SignUpInput = void 0;
const zod_1 = __importDefault(require("zod"));
const SignUpInput = zod_1.default.object({
    firstName: zod_1.default.string(),
    lastName: zod_1.default.string(),
    email: zod_1.default.string().email(),
    password: zod_1.default.string().min(6)
});
exports.SignUpInput = SignUpInput;
const SignInInput = zod_1.default.object({
    email: zod_1.default.string().email(),
    password: zod_1.default.string().min(6)
});
exports.SignInInput = SignInInput;
const CreatePostInput = zod_1.default.object({
    title: zod_1.default.string().min(3),
    content: zod_1.default.string()
});
exports.CreatePostInput = CreatePostInput;
const UpdatePostInput = zod_1.default.object({
    id: zod_1.default.number(),
    title: zod_1.default.string().min(3),
    content: zod_1.default.string()
});
exports.UpdatePostInput = UpdatePostInput;
