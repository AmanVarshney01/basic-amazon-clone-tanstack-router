import { useEffect, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const jsonData = await res.json();
      setData(jsonData);
    };
    fetchData();
  }, []);

  return (
    <main className="flex justify-center items-center min-h-screen flex-col gap-4 w-full">
      {/* <div className="text-white">{JSON.stringify(data)}</div> */}
      {data.map((item: any) => (
        <div>{item.name}</div>
      ))}
      <div className="text-5xl font-medium font-mono">Fullstack</div>
      <span className="text-2xl">{count}</span>
      <div className="flex flex-row gap-2">
        <button
          onClick={() => {
            setCount((prev) => prev + 1);
          }}
          className="border rounded-md py-1 px-2"
        >
          +1
        </button>
        <button
          onClick={() => {
            setCount((prev) => prev - 1);
          }}
          className="border rounded-md py-1 px-2"
        >
          -1
        </button>
      </div>
    </main>
  );
}
