import { PrismaCheckInsRepository } from "@/repository/prisma/prisma-check-in-repository";
import { SearchGymsUseCase } from "../search-gyms-";
import { PrismaGymsRepository } from "@/repository/prisma/prisma-gyms-repository";

export function makeSearchGymsUseCase() {
    const gymsRepository = new PrismaGymsRepository()
    const useCase = new SearchGymsUseCase(gymsRepository)

    return useCase;
}