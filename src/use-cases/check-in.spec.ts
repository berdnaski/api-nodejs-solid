import { expect, describe, it, beforeEach } from 'vitest'
import { RegisterUseCase } from '@/use-cases/register';
import { InMemoryCheckInsRepository } from '@/repository/in-memory/in-memory-check-ins-repository';
import { CheckInUseCase } from './check-in';


let checkInsRepository: InMemoryCheckInsRepository;
let sut: CheckInUseCase;

describe('Check-in Use Case', () => {
    beforeEach(() => {
        checkInsRepository = new InMemoryCheckInsRepository()
        sut = new CheckInUseCase(checkInsRepository)
    })

    it('should be able to check in', async() => {
        const { checkIn } = await sut.execute({
            gymId: 'gym-01',
            userId: 'user-01',
        })
        
        expect(checkIn.id).toEqual(expect.any(String));
    })
})