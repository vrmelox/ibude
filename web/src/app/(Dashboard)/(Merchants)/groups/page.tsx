export default function MerchantGroups() {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">My Payment Groups</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="h-48 bg-gray-100 rounded-lg animate-pulse" />
                ))}
            </div>
        </div>
    );
}
