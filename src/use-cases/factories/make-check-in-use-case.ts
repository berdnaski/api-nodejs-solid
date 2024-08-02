import { CheckInUseCase } from "../check-in";
import { PrismaCheckInsRepository } from "@/repository/prisma/prisma-check-in-repository";
import { PrismaGymsRepository } from "@/repository/prisma/prisma-gyms-repository";

export function makeCheckInUseCase() {
    const checkInRepository = new PrismaCheckInsRepository()
    const gymsRepository = new PrismaGymsRepository()
    const useCase = new CheckInUseCase(checkInRepository, gymsRepository)

    return useCase;
}