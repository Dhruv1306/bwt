// Generic Inventory class
export class Inventory<T extends { id: string }> {
  private items: T[] = [];

  addItem(item: T): void {
    this.items.push(item);
  }

  removeItem(id: string): boolean {
    const index = this.items.findIndex((item) => item.id === id);
    if (index !== -1) {
      this.items.splice(index, 1);
      return true;
    }
    return false;
  }

  findById(id: string): T | undefined {
    return this.items.find((item) => item.id === id);
  }

  getAllItems(): T[] {
    return [...this.items];
  }
}
