export interface IMovementRepository {
    model: string;
    getAll(): Promise<number>;
    getByUUID(uuid): Promise<number>;
}