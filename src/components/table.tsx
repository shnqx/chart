import { demoOrders } from "@/lib/demo_data"
import { Order } from "@/lib/types";
export default function Table() {

    const items = demoOrders;

    return (
        <div>
            <table className="w-full text-left">
                <thead className="text-sm uppercase text-slate-400">
                    <tr className="border-t border-slate-100">
                        <th className="text-sm px-8 py-5">Заказ</th>
                        <th className="text-sm px-8 py-5">Заказчик</th>
                        <th className="text-sm px-8 py-5">Сумма</th>
                        <th className="text-sm px-8 py-5">Статус</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => (
                        <tr key={item.id} className="border-t border-slate-100">
                            <td className="px-8 py-4">{item.id}</td>
                            <td className="px-8 py-4">{item.customer}</td>
                            <td className="px-8 py-4">{item.amount}{" руб."}</td>
                            <td className="px-8 py-4"><Status status={item.status}/></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

function Status({ status }: { status: Order["status"] }) {
  const styles = { Paid: "bg-emerald-50 text-emerald-700", Pending: "bg-amber-50 text-amber-700", Refunded: "bg-rose-50 text-rose-700" };
  return <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${styles[status]}`}>{status==="Pending" && "Ожидание"}{status==="Paid" && "Оплачено"}{status==="Refunded" && "Возврат"}</span>;
}