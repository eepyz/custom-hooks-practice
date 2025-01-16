import { useEffect, useState } from "react";

const useFetch = (url: string) => {
  const [data, setData] = useState({
    location: "",
    temperature: "",
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState("");

  const fetchData = async () => {
    try {
      setLoading(true); //
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("response is not ok");
      }

      const result = await response.json();

      setData({
        location: `${result.latitude}, ${result.longitude}`,
        temperature: `${result.current.temperature_2m}°C`,
      });
    } catch (error) {
      const message = (error as Error).message; // 보통 에러 타입 문제 이렇게 처리
      setErrors(message);
    } finally {
      setLoading(false); //
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    data,
    loading,
    errors,
  };
};

export default useFetch;
