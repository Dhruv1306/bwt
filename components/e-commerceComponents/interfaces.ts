// PaymentMethod interface
export interface PaymentMethod {
  processPayment(amount: number): Promise<boolean>;
  validatePayment(): boolean;
  getTransactionId(): string;
}

// Product interface
export interface Product<T> {
  id: string;
  name: string;
  basePrice: number;
  category: string;
  getDiscountedPrice(discount: number): number;
}
