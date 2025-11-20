import { useState, useEffect } from 'react'
import axios from 'axios';

const useFetch = (url, method) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true);
                let data = await axios[method](url)

                if (data) {
                    setData(data.data);
                }
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [url, method])

    return { data, error, loading };
}

export { useFetch };