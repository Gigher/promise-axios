import axios from 'axios';
import { useState, useEffect } from 'react';

interface AxiosPutProps {
  url: string;
  params?: object;
}

export function useAxiosPut({ url, params }: AxiosPutProps) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios.put(url, params)
    .then(response => {
      setData(response.data);
    })
    .catch(error => {
      setError(error);
    })
    .finally(() => {
      setIsLoading(false);
    });
  }, [url]);

  return { data, error, isLoading };
}