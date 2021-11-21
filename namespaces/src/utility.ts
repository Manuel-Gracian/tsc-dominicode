namespace Utility {
  export namespace Taxes {
    export function Calculate_Tax(price: number): number {
      return price * 0.21 + price;
    }

    export function Calculate_Penalty_Tax(price: number): number {
      return price * 0.3 + price;
    }
  }
}
