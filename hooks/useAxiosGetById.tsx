import axios from 'axios';
import { useState, useEffect } from 'react';

interface AxiosGetByIdProps {
  url: string;
  id: number | string;
}

export function useAxiosGetById({ url, id }: AxiosGetByIdProps) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios.get(`${url}/${id}`)
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