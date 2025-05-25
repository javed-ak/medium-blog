export default function BlogCardSkeleton() {
    return (
        <div className="flex justify-center animate-pulse">
            <div className="w-1/2">
                <div className="pt-5 px-10 flex flex-col gap-3">
                    <div className="flex gap-2 items-center">
                        <div className="h-8 w-8 bg-gray-200 rounded-full" />
                        <div className="h-3 w-20 bg-gray-200 rounded" />
                        <div className="text-gray-200">•</div>
                        <div className="h-3 w-20 bg-gray-200 rounded" />
                    </div>
                    <div className="flex gap-3">
                        <div className="h-8 w-50 bg-gray-200 rounded" />
                        <div className="h-8 w-50 bg-gray-200 rounded" />
                    </div>
                    <div className="flex gap-3">
                        <div className="h-4 w-40 bg-gray-200 rounded" />
                        <div className="h-4 w-50 bg-gray-200 rounded" />
                        <div className="h-4 w-80 bg-gray-200 rounded" />
                    </div>
                    <div className="flex gap-3">
                        <div className="h-4 w-40 bg-gray-200 rounded" />
                        <div className="h-4 w-80 bg-gray-200 rounded" />
                    </div>
                    <div className="h-2 w-12 bg-gray-200 rounded" />
                    <div className="h-0.5 w-full bg-gray-100" />
                </div>
            </div>
        </div>
    )
}