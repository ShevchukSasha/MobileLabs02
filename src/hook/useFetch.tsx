import {useEffect, useState} from 'react';

type FetchDataType<T> = {
  data: T[];
  isloading: boolean;
  error: string | null;
};

type FetchType = 'json' | 'images';

const useFetch = <T,>(
  url: string,
  type: FetchType = 'json',
): FetchDataType<T> => {
  const [data, setData] = useState<T[]>([]);
  const [isloading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);

        if (type === 'json') {
          const jsonData = await response.json();
          setData(jsonData);
        } else if (type === 'images') {
          const json = await response.json();

          const imageFiles = json.filter((file: any) =>
            file.name.match(/\.(jpg|jpeg|png|gif)$/i),
          );

          const images = imageFiles.map((imageFile: any) => {
            const imageUrl = imageFile.download_url;

            return imageUrl;
          });

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

  return {data, isloading, error};
};

export default useFetch;