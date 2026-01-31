export default function MerchantSettings() {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Store Settings</h1>
            <div className="max-w-3xl space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <div className="h-4 w-24 bg-gray-100 rounded animate-pulse" />
                        <div className="h-10 bg-gray-100 rounded animate-pulse" />
                    </div>
                    <div className="space-y-2">
                        <div className="h-4 w-24 bg-gray-100 rounded animate-pulse" />
                        <div className="h-10 bg-gray-100 rounded animate-pulse" />
                    </div>
                </div>
                <div className="space-y-2">
                    <div className="h-4 w-24 bg-gray-100 rounded animate-pulse" />
                    <div className="h-32 bg-gray-100 rounded animate-pulse" />
                </div>
            </div>
        </div>
    );
}
