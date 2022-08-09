export interface Item {
  id: string;
}

export interface RestRepositoryType<T extends Item, Response> {
  getAll: () => Promise<Array<T>>;
  add: (item: Partial<T>) => Promise<T>;
  delete: (id: T["id"]) => Promise<Response>;
}
