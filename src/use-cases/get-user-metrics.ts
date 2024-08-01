import { CheckIn } from "@prisma/client";
import { CheckInsRepository } from "@/repository/check-ins-repository";

interface GetUserMetricsUseCaseRequest {
    userId: string;
}

interface GetUserMetricsUseCaseResponse {
    checkInsCount: number;
}

export class GetUserMetricsUseCase {
    constructor(
        private checkInsRepository: CheckInsRepository,
    ) {}

    async execute({
         userId,
    }: GetUserMetricsUseCaseRequest): Promise<GetUserMetricsUseCaseResponse> {
        const checkInsCount = await this.checkInsRepository.countByUserId(userId);
        
        return {
            checkInsCount,
        }
    }
}