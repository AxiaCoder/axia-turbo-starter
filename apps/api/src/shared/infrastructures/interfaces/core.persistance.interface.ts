/**
 * T => la classe provenant de la BDD
 * U => la classe d'input
 */
export interface CorePersistanceInterface<T, U> {
  list(): Promise<T[]>;
  get(id: number): Promise<T>;
  create(item: U): Promise<T>;
  update(item: U, id: number): Promise<T>;
  delete(id: number): Promise<T>;
}
