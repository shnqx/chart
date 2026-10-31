"use client"

import RevenueChart from "./revenue_chart";
import Table from "./table";
import RecentActivities from "./recent_activities";

const Dashboard = () => (
    <main className="bg-page-bg">
        <h1 className="m-8 text-2xl font-bold">Аналитика</h1>

        <div className="grid grid-cols-3">
            <div className="card ml-8 p-5 muted">Общая выручка</div>
            <div className="card ml-8 p-5 muted">Всего клиентов</div>
            <div className="card ml-8 p-5 muted">Всего заказов</div>
        </div>
        <div className="grid grid-cols-2">
            <div className="m-8 card">
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
);

export default Dashboard;