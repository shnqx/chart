import type { Order } from "./types"

export const demoOrders: Order[] = [
  { id: "PB-1048", customer: "ООО ТАНДЕР", email: "tander@example.ru", product: "Pro plan", amount: 12900, status: "Paid", created_at: "2026-10-30T10:20:00Z" },
  { id: "PB-1047", customer: "ИП Иванов", email: "ivanov@example.ru", product: "Starter plan", amount: 4900, status: "Pending", created_at: "2026-10-29T14:10:00Z" },
  { id: "PB-1046", customer: "АО ГАЗПРОМ", email: "gazprom@example.ru", product: "Pro plan", amount: 12900, status: "Paid", created_at: "2026-10-28T09:30:00Z" },
  { id: "PB-1045", customer: "Клинских Юрий", email: "ky@example.ru", product: "Starter plan", amount: 24900, status: "Refunded", created_at: "2026-10-27T16:45:00Z" },
  { id: "PB-1044", customer: "Яндекс", email: "yandex@example.ru", product: "Starter plan", amount: 4900, status: "Paid", created_at: "2026-10-26T11:00:00Z" },
 ];

export const chartData = [
    { day: "Пн ", revenue: 42000, }, { day: "Вт", revenue: 58000 },
    { day: "Ср", revenue: 49000 }, { day: "Чт", revenue: 76000 },
    { day: "Пт", revenue: 65000 }, { day: "Сб", revenue: 91000 },
    { day: "Вс", revenue: 84000 }
];