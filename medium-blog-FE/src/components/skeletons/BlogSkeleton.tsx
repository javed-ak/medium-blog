export default function BlogSkeleton() {
    return (
        <div className="grid grid-cols-3 container m-auto gap-10 p-10 animate-pulse">
                    <div className="grid col-span-2 gap-5">
                        <div>
                            <div className="h-9 w-3/4 bg-gray-200 rounded"></div>
                        </div>
                        <div className="flex gap-3">
                            <div className="h-9 w-40 bg-gray-200 rounded"></div>
                            <div className="h-9 w-50 bg-gray-200 rounded"></div>
                        </div>
                        <div className="h-3 w-20 bg-gray-200 rounded"></div>
                        <div className="h-70 w-full bg-gray-200 rounded"></div>
                        <div className="h-40 w-full bg-gray-200 rounded"></div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="h-5 w-20 bg-gray-200 rounded"></div>
                        <div className="flex items-center gap-5">
                            <div className="h-12 w-12 bg-gray-200 rounded-full"></div>
                            <div className="w-full flex flex-col gap-3">
                                <div className="h-7 w-30 bg-gray-200 rounded"></div>
                                <div className="h-20 w-full bg-gray-200 rounded"></div>
                            </div>
                        </div>
                    </div>
                </div>
    )
}