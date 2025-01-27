import { useEffect, useState } from "react";

export function useFetch() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/datas.json");
        if (!response) {
          throw new Error(`Liste non trouvé: ${response.status}`);
        }

        const resul = await response.json();
        setData(resul);
      } catch (error) {
        setError(error);
      }
    }
    fetchData();
  }, []);
  return { data, error };
}
