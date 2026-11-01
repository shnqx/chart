import { Activity } from "lucide-react";

export default function RecentActivities() {

    return (
        <>
            <h3 className="font-bold mt-8 ml-8">
                Последняя активность
            </h3>
            <p className=" ml-8 mb-5 text-sm muted">Последние клиенты и заказы</p>
            <div className="pb-5">
                <div className="ml-8 items-center gap-3 flex">
                    <div className="rounded-2xl p-2 bg-green-200"><Activity className="text-green-500" /></div>
                    <p className="text-sm">Заказ оплачен</p>
                </div>
                <p className="ml-21 muted text-xs">PB-1048 ООО ТАНДЕР</p>
                <p className="ml-21 muted text-xs">2 минуты назад</p>
            </div>
            <div className="pb-5">
                <div className="ml-8 items-center gap-3 flex">
                    <div className="rounded-2xl p-2 bg-violet-200"><Activity className="text-violet-500" /></div>
                    <p className="text-sm">Получен новый заказ</p>
                </div>
                <p className="ml-21 muted text-xs">PB-1048 ООО ТАНДЕР</p>
                <p className="ml-21 muted text-xs">2 минуты назад</p>
            </div>
            <div className="pb-5">
                <div className="ml-8 items-center gap-3 flex">
                    <div className="rounded-2xl p-2 bg-green-200"><Activity className="text-green-500" /></div>
                    <p className="text-sm">Заказ оплачен</p>
                </div>
                <p className="ml-21 muted text-xs">PB-1046 АО ГАЗПРОМ</p>
                <p className="ml-21 muted text-xs">15 минут назад</p>
            </div>
            <div className="pb-5">
                <div className="ml-8 items-center gap-3 flex">
                    <div className="rounded-2xl p-2 bg-red-200"><Activity className="text-red-500" /></div>
                    <p className="text-sm">Оформлен возврат</p>
                </div>
                <p className="ml-21 muted text-xs">PB-1045 Клинских Юрий</p>
                <p className="ml-21 muted text-xs">1 час назад</p>
            </div>
        </>
    )
}