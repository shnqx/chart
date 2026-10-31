export type Order = {
  id: string;
  customer: string;
  email: string;
  product: string;
  amount: number;
  status: "Paid" | "Pending" | "Refunded";
  created_at: string;
};