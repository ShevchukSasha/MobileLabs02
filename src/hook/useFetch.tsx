import { useEffect, useState } from 'react';

type FetchDataType<T> = {
  data: T[];
  isLoading: boolean;
  error: string | null;
};

type FetchType = 'json' | 'images';

const useFetch = <T,>(
  url: string,
  type: FetchType = 'json',
): FetchDataType<T> => {
  const [data, setData] = useState<T[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();

        if (type === 'json') {
          setData(json);
        } else if (type === 'images') {
          const images = json.filter((file: any) => file.type === 'file' && /\.(jpg|jpeg|png|gif)$/i.test(file.name))
            .map((imageFile: any) => imageFile.download_url);

          setData(images);
        }

        setIsLoading(false);
      } catch (err) {
        setError('Error fetching data');
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url, type]);

  return { data, isLoading, error };
};

export default useFetch;
