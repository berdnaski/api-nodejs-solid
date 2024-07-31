import { z } from "zod";
import fastify from "fastify";
import { prisma } from "./lib/prisma";

export const app = fastify();

app.post('/users', async(req, reply) => {
    const registerBodySchema = z.object({
        name: z.string().min(3).max(255),
        email: z.string().email().min(6).max(255),
        password: z.string().min(6),
    })

    const {  name, email, password } = registerBodySchema.parse(req.body);

    await prisma.user.create({
        data: {
            name,
            email,
            password_hash: password,
        },
    })
    return reply.status(201).send();
})