"use client"

import RevenueChart from "./revenue_chart";
import Table from "./table";
import RecentActivities from "./recent_activities";
import { Activity, LayoutDashboard, CreditCard, Users, Settings } from "lucide-react";

const Dashboard = () => (
    <div className="flex min-h-screen">
        <aside className="flex-col p-5 shrink-0 w-60 text-white bg-[#172235]">
            <div className="flex items-center gap-3">
                <div className="rounded-xl bg-violet-500 p-2"><Activity size={20} /></div>
                <div>
                    <div className="text-2xl">Chart</div>
                    <div className="text-xs muted">Учебный проект</div>
                </div>
            </div>
            <nav className="mt-5 space-y-2">
                <div className="px-3 flex gap-2 py-2 bg-violet-500 rounded-xl "><LayoutDashboard />Аналитика</div>
                <div className="muted flex gap-2 py-2 ml-3"><CreditCard />Заказы</div>
                <div className="muted flex gap-2 py-2 ml-3"><Users />Клиенты</div>
                <div className="muted flex gap-2 py-2 ml-3"><Settings />Настройки</div>
            </nav>
        </aside>
        <main className="bg-page-bg">
            <h1 className="m-8 text-2xl font-bold">Аналитика</h1>

            <div className="grid grid-cols-3">
                <div className="card ml-8 p-8 muted">Общая выручка</div>
                <div className="card ml-8 p-8 muted">Всего клиентов</div>
                <div className="card ml-8 p-8 muted">Всего заказов</div>
            </div>
            <div className="grid grid-cols-3">
                <div className="col-span-2 m-8 card">
                    <RevenueChart />
                </div>
                <div className="my-8 card">
                    <RecentActivities />
                </div>
            </div>

            <div className="ml-8 mb-8 card">
                <div className="mb-8 ml-8">
                    <h3 className="mt-8 font-bold">Последние заказы</h3>
                    <p className="text-sm muted">Управляйте своими заказами</p>
                </div>
                <Table />
            </div>
        </main>
    </div>
);

export default Dashboard;