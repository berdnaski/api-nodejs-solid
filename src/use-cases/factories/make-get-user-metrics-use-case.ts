import { GetUserMetricsUseCase } from "../get-user-metrics";
import { PrismaCheckInsRepository } from "@/repository/prisma/prisma-check-in-repository";

export function makeGetUserMetricsUseCase() {
    const checkInsRepository = new PrismaCheckInsRepository()
    const useCase = new GetUserMetricsUseCase(checkInsRepository)

    return useCase;
}