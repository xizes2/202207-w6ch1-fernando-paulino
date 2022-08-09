import { Item, RestRepositoryType } from "../types/RestRepositoryTypes";

export class RestRepository<T extends Item, Response>
  implements RestRepositoryType<T, Response>
{
  constructor(public url: string) {}

  async getAll() {
    const response = await fetch(this.url);
    return response.json();
  }

  async add(item: Partial<T>) {
    const response = await fetch(this.url, {
      method: "POST",
      body: JSON.stringify(item),
      headers: { "Content-type": "application/json" },
    });
    return response.json();
  }

  async delete(id: T["id"]) {
    const response = await fetch(this.url + id, {
      method: "DELETE",
    });
    return response as unknown as Promise<Response>;
  }
}
