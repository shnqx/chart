export default function Table() {

    return (
        <div>
            <table className="w-full text-left">
                <thead className="bg-slate-50 text-sm uppercase text-slate-400">
                    <tr className="border-t border-slate-100">
                        <th className="p-5">Заказ</th>
                        <th>Заказчик</th>
                        <th>Сумма</th>
                        <th>Статус</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-t border-slate-100">
                        <td className="p-5">a</td>
                        <td className="p-5">b</td>
                        <th className="p-5">c</th>
                        <th className="p-5">d</th>
                    </tr>
                    <tr className="border-t border-slate-100">
                        <td className="p-5">a</td>
                        <td className="p-5">b</td>
                        <th className="p-5">c</th>
                        <th className="p-5">d</th>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}