import { AxiosRequestConfig, CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../services/api-client";

interface FetchResponse<T> {
    count: number;
    results: T[];
}

const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => { //once you pass a parameter as optional, all the parameters that follow it have to be declared as optional
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
    
        setLoading(true)
      apiClient
        .get<FetchResponse<T>>(endpoint, { signal: controller.signal, ...requestConfig}) // ... is called spread
        .then((res) => {
            setData(res.data.results)
            setLoading(false)
        })
        .catch((err) => {
            if (err instanceof CanceledError) return;
            setError(err.message)
            setLoading(false)
         });

        return () => controller.abort(); //cleanup function
    }, deps ? [...deps] : []); //added the square brackets to avoid constantly sending requests to our backend
    return { data, error, isLoading  } 
}

export default useData;