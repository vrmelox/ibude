export default function UserProfile() {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Profile Settings</h1>
            <div className="max-w-xl space-y-6">
                <div className="flex items-center space-x-4">
                    <div className="h-20 w-20 bg-gray-100 rounded-full animate-pulse" />
                    <div className="h-8 w-40 bg-gray-100 rounded animate-pulse" />
                </div>
                <div className="space-y-4">
                    <div className="h-10 bg-gray-100 rounded animate-pulse" />
                    <div className="h-10 bg-gray-100 rounded animate-pulse" />
                    <div className="h-10 bg-gray-100 rounded animate-pulse" />
                </div>
            </div>
        </div>
    );
}
