export default function UserGroups() {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">My Groups</h1>
            <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="h-24 bg-gray-100 rounded-lg animate-pulse" />
                ))}
            </div>
        </div>
    );
}
