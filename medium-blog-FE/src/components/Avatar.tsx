interface Username {
    username: string;
    size: number;
}
export default function Avatar({username, size}: Username) {
    return <div className={`bg-gray-200 rounded-full h-${size} w-${size} border-2 border-gray-400 flex justify-center items-center font-bold text-gray-400`}>{username[0].toUpperCase()}</div>
}