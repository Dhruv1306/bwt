// Product<T> interface is in interfaces.ts
export class BaseProduct<T> implements Product<T> {
  id: string;
  name: string;
  basePrice: number;
  category: string;

  constructor(id: string, name: string, basePrice: number, category: string) {
    this.id = id;
    this.name = name;
    this.basePrice = basePrice;
    this.category = category;
  }

  getDiscountedPrice(discount: number): number {
    // Default: no discount
    return this.basePrice;
  }
}

export class ElectronicsProduct extends BaseProduct<ElectronicsProduct> {
  private static MAX_DISCOUNT = 0.2; // 20%
  private static EXTRA_DISCOUNT = 0.05; // 5% extra for electronics

  getDiscountedPrice(discount: number): number {
    const maxDiscount = ElectronicsProduct.MAX_DISCOUNT;
    let appliedDiscount = Math.min(discount, maxDiscount);
    // Extra discount for electronics
    appliedDiscount += ElectronicsProduct.EXTRA_DISCOUNT;
    return this.basePrice * (1 - appliedDiscount);
  }
}

export class ClothingProduct extends BaseProduct<ClothingProduct> {
  private static MAX_DISCOUNT = 0.3; // 30%
  private static SEASONAL_DISCOUNT = 0.1; // 10% extra for clothing

  getDiscountedPrice(discount: number): number {
    let appliedDiscount = Math.min(discount, ClothingProduct.MAX_DISCOUNT);
    // Extra discount for clothing
    appliedDiscount += ClothingProduct.SEASONAL_DISCOUNT;
    return this.basePrice * (1 - appliedDiscount);
  }
}
