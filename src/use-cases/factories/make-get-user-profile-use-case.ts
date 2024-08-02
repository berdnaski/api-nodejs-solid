import { PrismaUsersRepository } from "@/repository/prisma/prisma-users-repository"
import { GetUserProfileUseCase } from "../get-user-profile";

export function makeGetUserProfileUseCase() {
    const usersRepository = new PrismaUsersRepository()
    const useCase = new GetUserProfileUseCase(usersRepository)

    return useCase;
}