import { CheckIn, Prisma } from "@prisma/client";

export interface CheckInsRepository {
    create(data: Prisma.CheckInUncheckedCreateInput): Promise<CheckIn>
    findByUserIdOnData(userId: string, date: Date): Promise<CheckIn | null>
}