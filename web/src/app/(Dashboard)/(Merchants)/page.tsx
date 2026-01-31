export default function MerchantOverview() {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Merchant Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="h-40 bg-gray-100 rounded-lg animate-pulse" />
                <div className="h-40 bg-gray-100 rounded-lg animate-pulse" />
            </div>
            <div className="mt-8 h-64 bg-gray-100 rounded-lg animate-pulse" />
        </div>
    );
}
