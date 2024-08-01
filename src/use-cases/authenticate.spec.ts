import { expect, describe, it, beforeEach } from 'vitest'
import { hash } from 'bcryptjs';
import { InMemoryUsersRepository } from '@/repository/in-memory/in-memory-users-repository';
import { AuthenticateUseCase } from './authenticate';
import { InvalidCredentialsError } from './errors/invalid-credentials-error';
import { RegisterUseCase } from './register';

let usersRepository: InMemoryUsersRepository;
let sut: AuthenticateUseCase

describe('Authenticate Use Case', () => {
    beforeEach(() => {
        usersRepository = new InMemoryUsersRepository()
        sut = new AuthenticateUseCase(usersRepository)
    })

    it('should be able to authenticate', async() => {
        await usersRepository.create({
            name: 'John Doe',
            email: 'john.doe@example.com',
            password_hash: await hash('password123', 6),
        })

        const { user } = await sut.execute({
            email: 'john.doe@example.com',
            password: 'password123',
        })
        
        expect(user.id).toEqual(expect.any(String));
    })

    it('should not be able to authenticate with wrong email', async() => {
        expect(() => sut.execute({
            email: 'john22.doe@example.com',
            password: 'password123',
        })).rejects.toBeInstanceOf(InvalidCredentialsError)
    })

    it('should not be able to authenticate with wrong password', async() => {
        await usersRepository.create({
            name: 'John Doe',
            email: 'john.doe@example.com',
            password_hash: await hash('password123', 6),
        })

        expect(() => sut.execute({
            email: 'john22.doe@example.com',
            password: '432423432',
        })).rejects.toBeInstanceOf(InvalidCredentialsError)
    })
})