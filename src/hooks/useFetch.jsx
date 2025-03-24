import { useEffect, useState } from "react"

//untuk nge fetch data dari API
function useFetch(url){
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const response = await fetch(url)
                if (!response.ok){
                    throw new error("Gagal mengambil data!")
                }
                const result = await response.json()
                setData(result)
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        };
        fetchData()
    },[url])
    
    return {data, loading, error}
}

export default useFetch;