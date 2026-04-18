class Order {
  public customerName: string;
  private orderId: string;
  private amount: number;
  private isDelivered: boolean;

  constructor(customerName: string, orderId: string, amount: number) {
    this.customerName = customerName;
    this.orderId = orderId;
    this.amount = amount;
    this.isDelivered = false;
  }

  getOrderId(): string {
    return this.orderId;
  }

  getAmount(): number {
    return this.amount;
  }

  getDeliveryStatus(): boolean {
    return this.isDelivered;
  }

  // Method overloading for addAmount
  addAmount(value: number): void;
  addAmount(value: number, note: string): void;
  addAmount(value: number, note?: string): void {
    this.amount += value;
    if (note) {
      console.log(`Note: ${note}`);
    }
  }

  // Mark the order as delivered
  markAsDelivered(): void {
    this.isDelivered = true;
  }

  // Apply a discount to the amount
  applyDiscount(percent: number): void {
    if (percent > 0 && percent < 100) {
      this.amount = this.amount - (this.amount * percent) / 100;
    }
  }

  toString(): string {
    return `Order[name=${this.customerName}, id=${this.orderId}, amount=${this.amount}, delivered=${this.isDelivered}]`;
  }
}

export default Order;
