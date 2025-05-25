interface ButtonProps {
    buttonText: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
export default function Button({ buttonText, onClick }: ButtonProps) {
    return (
        <>
            <button className="bg-black text-white p-2 rounded-lg w-full hover:scale-105 transition-all mt-2 cursor-pointer" onClick={onClick}>{buttonText}</button>
        </>
    )
}