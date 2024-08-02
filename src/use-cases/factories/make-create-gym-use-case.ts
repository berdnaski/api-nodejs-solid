import { PrismaGymsRepository } from "@/repository/prisma/prisma-gyms-repository";
import { FetchNearbyGymsUseCase } from "../fetch-nearby-gyms";
import { CreateGymUseCase } from "../create-gym";

export function makeCreateGYmsUseCase() {
    const gymsRepository = new PrismaGymsRepository();
    const useCase = new CreateGymUseCase(gymsRepository)

    return useCase;
}