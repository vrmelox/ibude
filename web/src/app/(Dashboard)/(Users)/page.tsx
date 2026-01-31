export default function UserDashboard() {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">My Account</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="h-32 bg-gray-100 rounded-lg animate-pulse" />
                <div className="h-32 bg-gray-100 rounded-lg animate-pulse" />
                <div className="h-32 bg-gray-100 rounded-lg animate-pulse" />
            </div>
            <div className="mt-8 space-y-4">
                <h2 className="text-xl font-semibold">Recent Activity</h2>
                <div className="h-40 bg-gray-100 rounded-lg animate-pulse" />
            </div>
        </div>
    );
}
