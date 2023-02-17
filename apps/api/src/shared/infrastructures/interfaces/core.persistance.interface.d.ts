export interface CorePersistanceInterface<T, U> {
    list(): Promise<T[]>;
    get(id: number): Promise<T>;
    create(item: U): Promise<T>;
    update(item: U, id: number): Promise<T>;
    delete(id: number): Promise<T>;
}
//# sourceMappingURL=core.persistance.interface.d.ts.map