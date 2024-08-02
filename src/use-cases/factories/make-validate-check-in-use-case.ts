import { GetUserMetricsUseCase } from "../get-user-metrics";
import { PrismaCheckInsRepository } from "@/repository/prisma/prisma-check-in-repository";
import { ValidateCheckInUseCase } from "../validate-check-in";

export function makeValidateCheckInCase() {
    const checkInsRepository = new PrismaCheckInsRepository()
    const useCase = new ValidateCheckInUseCase(checkInsRepository)

    return useCase;
}