import { PrismaGymsRepository } from "@/repository/prisma/prisma-gyms-repository";
import { FetchNearbyGymsUseCase } from "../fetch-nearby-gyms";

export function makeFetchNearbyGymsUseCase() {
    const gymsRepository = new PrismaGymsRepository();
    const useCase = new FetchNearbyGymsUseCase(gymsRepository)

    return useCase;
}