export default function AdminOverview() {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Admin Overview</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="h-32 bg-gray-100 rounded-lg animate-pulse" />
                <div className="h-32 bg-gray-100 rounded-lg animate-pulse" />
                <div className="h-32 bg-gray-100 rounded-lg animate-pulse" />
            </div>
            <div className="mt-8 h-64 bg-gray-100 rounded-lg animate-pulse" />
        </div>
    );
}
