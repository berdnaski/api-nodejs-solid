import { expect, describe, it } from 'vitest'
import { RegisterUseCase } from '@/use-cases/register';
import { PrismaUsersRepository } from '@/repository/prisma/prisma-users-repository';
import { compare } from 'bcryptjs';

describe('Register Use Case', () => {
    it('should hash user password upon registration', async() => {
        const registerUseCase = new RegisterUseCase({
            async findByEmail(email) {
                return null
            },

            async create(data) {
                return {
                    id: 'user-1',
                    name: data.name,
                    email: data.email,
                    password_hash: data.password_hash,
                    created_at: new Date(),
                }
            }
        });

        const { user } = await registerUseCase.execute({
            name: 'John Doe',
            email: 'john.doe@example.com',
            password: 'password123',
        })

        const isPasswordCorrectlyHashed = await compare(
            'password123',
            user.password_hash,
        )

        expect(isPasswordCorrectlyHashed).toBe(true)
    })
})