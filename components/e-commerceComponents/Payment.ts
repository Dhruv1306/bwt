// Local PaymentMethod interface to break any circular/cache issues
interface PaymentMethod {
  processPayment(amount: number): Promise<boolean>;
  validatePayment(): boolean;
  getTransactionId(): string;
}

export class CreditCardPayment implements PaymentMethod {
  private transactionId: string = "";
  private valid: boolean;

  constructor(
    private cardNumber: string,
    private cvv: string,
  ) {
    this.valid = this.validatePayment();
  }

  validatePayment(): boolean {
    // Simple validation: card number is 16 digits, cvv is 3 digits
    return /^\d{16}$/.test(this.cardNumber) && /^\d{3}$/.test(this.cvv);
  }

  async processPayment(amount: number): Promise<boolean> {
    if (!this.valid) return false;
    // Simulate payment processing
    await new Promise((res) => setTimeout(res, 500));
    this.transactionId = "CC-" + Math.random().toString(36).substring(2, 10);
    return true;
  }

  getTransactionId(): string {
    return this.transactionId;
  }
}

export class PayPalPayment implements PaymentMethod {
  private transactionId: string = "";
  private valid: boolean;

  constructor(private email: string) {
    this.valid = this.validatePayment();
  }

  validatePayment(): boolean {
    // Simple validation: must contain @
    return this.email.includes("@");
  }

  async processPayment(amount: number): Promise<boolean> {
    if (!this.valid) return false;
    // Simulate payment processing
    await new Promise((res) => setTimeout(res, 500));
    this.transactionId = "PP-" + Math.random().toString(36).substring(2, 10);
    return true;
  }

  getTransactionId(): string {
    return this.transactionId;
  }
}
