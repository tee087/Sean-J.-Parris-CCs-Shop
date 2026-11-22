// Direct Bitcoin Payment
// BTC Address: 36t5Txsp3JVnPfzCJFmSosv6vvuE3Cv9Eh

export const BTC_ADDRESS = '36t5Txsp3JVnPfzCJFmSosv6vvuE3Cv9Eh';

export interface PaymentDetails {
  orderId: string;
  amountUsd: number;
  btcAddress: string;
}

export function generateOrderId(): string {
  return `CV-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
}

export function createPaymentDetails(amountUsd: number): PaymentDetails {
  return {
    orderId: generateOrderId(),
    amountUsd,
    btcAddress: BTC_ADDRESS,
  };
}

