import useFetch from "../hooks/useFetch";

export function WeatherSection() {
  const URL = "https://api.open-meteo.com/v1/forecast?latitude=37.57&longitude=126.98&current=temperature_2m";

  const { data, loading, errors } = useFetch(URL);

  if (loading) return <p>Loading...</p>;
  if (errors) return <p>{errors}</p>;

  return (
    <div>
      <h1>Weather in Iceland</h1>
      <div>
        <p>Location: {data.location}</p>
        <p>Temperature: {data.temperature}</p>
      </div>
    </div>
  );
}
