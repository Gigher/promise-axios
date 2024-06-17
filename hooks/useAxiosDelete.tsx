import axios from 'axios';
import { useState, useEffect } from 'react';

interface AxiosDeleteProps {
  url: string;
}

export function useAxiosDelete({ url }: AxiosDeleteProps) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios.delete(url)
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