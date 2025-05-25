// import axios from "axios";
// import { useEffect, useState } from "react"

export default function Quote() {
    // const [quote, setQuote] = useState('');
    // const [loading, setLoading] = useState(true);

    // const getQuote = async () => {
    //     try {
    //         const res = await axios.get("https://zenquotes.io/api/random");
    //         return res.data;
    //     } catch (err) {
    //         console.log("Something went wrong!", err);
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    // useEffect(() => {
    //     const quo = getQuote();
    //     setQuote(quo)
    //     setLoading(false)
    // }, [])
    return (
        <div className="px-30">
            <div className="font-bold text-3xl">"Expect the best of yourself, and then do what is necessary to make it a reality."</div>
            <div className="text-gray-600 text-sm">- Ralph Marston</div>
        </div>
    )
}