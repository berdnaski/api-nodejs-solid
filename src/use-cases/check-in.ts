import { UsersRepository } from "@/repository/users-repository";
import { CheckIn, User } from "@prisma/client";
import { InvalidCredentialsError } from "./errors/invalid-credentials-error";
import { compare } from "bcryptjs";
import { CheckInsRepository } from "@/repository/check-ins-repository";
import { GymsRepository } from "@/repository/gyms-repository";
import { ResourceNotFoundError } from "./errors/resource-not-found-error";
import { getDistanceBetweenCoordinates } from "@/utils/get-distance-between-coordinates";
import { MaxDistanceError } from "./errors/max-distance-error";
import { MaxNumberOfCheckInsError } from "./errors/max-number-of-check-ins-error";

interface CheckInUseCaseRequest {
    userId: string;
    gymId: string;
    userLatitude: number;
    userLongitude: number;
}

interface CheckInUseCaseResponse {
    checkIn: CheckIn
}

export class CheckInUseCase {
    constructor(
        private checkInsRepository: CheckInsRepository,
        private gymsRepository: GymsRepository
    ) {}

    async execute({
         userId,
         gymId,
         userLatitude,
         userLongitude
    }: CheckInUseCaseRequest): Promise<CheckInUseCaseResponse> {
        const gym = await this.gymsRepository.findById(gymId);

        if(!gym) {
            throw new ResourceNotFoundError();
        }

        const distance = getDistanceBetweenCoordinates(
            { latitude: userLatitude, longitude: userLongitude },
            { 
              latitude: gym.latitude.toNumber(), 
              longitude: gym.longitude.toNumber() 
            },
        )

        const MAX_DISTANCE_IN_KILOMETERS = 0.1

        if(distance > MAX_DISTANCE_IN_KILOMETERS) {
            throw new MaxDistanceError();
        }
        // calculate distance between user and gym

        const checkInOnSameDate = await this.checkInsRepository.findByUserIdOnData(
            userId,
            new Date()
        )

        if(checkInOnSameDate) {
            throw new MaxNumberOfCheckInsError();
        }

        const checkIn = await this.checkInsRepository.create({
            user_id: userId,
            gym_id: gymId,
        })
        
        return {
            checkIn,
        }
    }
}