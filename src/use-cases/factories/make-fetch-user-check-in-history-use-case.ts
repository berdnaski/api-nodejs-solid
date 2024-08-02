import { FetchUserCheckInsHistoryUseCase } from "../fetch-user-check-ins-history";
import { GetUserMetricsUseCase } from "../get-user-metrics";
import { PrismaCheckInsRepository } from "@/repository/prisma/prisma-check-in-repository";

export function makeFetchUserCheckInsHistoryUseCase() {
    const checkInsRepository = new PrismaCheckInsRepository()
    const useCase = new FetchUserCheckInsHistoryUseCase(checkInsRepository)

    return useCase;
}