import { Product } from "./interfaces";
import { PaymentMethod } from "./interfaces";

export class Order {
  private items: { product: Product<any>; quantity: number }[] = [];
  private paymentMethod: PaymentMethod | null = null;
  private discount: number = 0.1; // 10% discount on total

  addProduct(product: Product<any>, quantity: number): void {
    this.items.push({ product, quantity });
  }

  setPaymentMethod(payment: PaymentMethod) {
    this.paymentMethod = payment;
  }

  calculateSubtotal(): number {
    return this.items.reduce(
      (sum, item) => sum + item.product.basePrice * item.quantity,
      0,
    );
  }

  async checkout(): Promise<{ success: boolean; transactionId: string }> {
    if (!this.paymentMethod) {
      return { success: false, transactionId: "" };
    }
    // Apply discount on total
    const total = this.items.reduce(
      (sum, item) =>
        sum + item.product.getDiscountedPrice(this.discount) * item.quantity,
      0,
    );
    const success = await this.paymentMethod.processPayment(total);
    return {
      success,
      transactionId: this.paymentMethod.getTransactionId(),
    };
  }
}
