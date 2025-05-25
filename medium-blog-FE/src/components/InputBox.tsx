interface InputType {
    label: string;
    type?: string
    placeholder: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
export default function InputBox({label, type, placeholder, onChange} : InputType) {
    return (
        <div className="text-sm">
            <label className="font-bold">{label}</label>
            <input type={type} placeholder={placeholder} className="border border-gray-200 p-2 w-full rounded-lg mt-1" onChange={onChange}/>
        </div>
    )
}