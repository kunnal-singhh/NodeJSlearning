import { useEffect, useState } from 'react'
import './App.css'

const API_URL = import.meta.env.VITE_API_URL;

async function request() {
  try {
    const response = await fetch(`${API_URL}/list`);

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.log(error.message);
    return [];
  }
}

function App() {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await request();
      setLists(data);
    }

    fetchData();
  }, []);

  return (
    <>
      <h1>Hi this is frontend</h1>
      <p>Lists fetched from backend</p>

      {
        lists.map((list) => (
          <div key={list.id}>
            <h3>{list.title}</h3>
            <p>{list.content}</p>
          </div>
        ))
      }
    </>
  )
}

export default App;