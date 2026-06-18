// Mirrors the printpesa (aviator_v2) public schema for the tables this app reads.

export interface Wallet {
  id: string;
  user_id: string;
  balance: number;
  currency: string;
  updated_at: string | null;
}

export type WithdrawalStatus =
  | 'pending'
  | 'approved'
  | 'processing'
  | 'paid'
  | 'completed'
  | 'rejected'
  | 'failed';

export interface WithdrawalRequest {
  id: string;
  user_id: string;
  amount: number;
  phone_number: string;
  status: WithdrawalStatus;
  auto_approved: boolean;
  created_at: string;
  reviewed_at: string | null;
  completed_at: string | null;
  rejection_reason: string | null;
  mpesa_receipt: string | null;
}
