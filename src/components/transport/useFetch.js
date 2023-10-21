import { useState, useEffect } from "react";


export function useFecth(url) {

    const [data , setData] = useState(null);

    useEffect(() => {
        fetch(url)
        .then((response) => response.json())
        .then((data) => setData(data));
    }, []);

    return { data } ;
}