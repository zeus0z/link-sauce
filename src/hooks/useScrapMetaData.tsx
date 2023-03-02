
import { useEffect, useState } from 'react'

const useScrapMetaData = (url: string) => {


    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null)

    const getMetaData = async () => {

        
    }

    useEffect(() => {

        getMetaData()


    }, [url])


    return { isLoading, data, error }
}

export default useScrapMetaData