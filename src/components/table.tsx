import { demoOrders } from "@/lib/demo_data"

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
                            <td className="px-8 py-4">{item.status === "Pending" && "Ожидает"}{item.status === "Paid" && "Оплачен"}{item.status === "Refunded" && "Возврат"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}