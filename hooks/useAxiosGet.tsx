import axios from 'axios';
import { useState, useEffect } from 'react';

interface AxiosGetProps {
  url: string;
}

export function useAxiosGet({ url }: AxiosGetProps) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios.get(url)
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