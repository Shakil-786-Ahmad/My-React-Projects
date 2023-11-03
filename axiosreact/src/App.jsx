import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'

function App() {
  const [myData, setmyData] = useState([])
  const [isError, setError] = useState("");


  // NOTE: Using Promises
  // useEffect(() => {
  //   axios.get("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) =>
  //       setmyData(res.data)
  //     )
  //     .catch((error) => {
  //       setError(error.message);
  //     })
  // }, [])

  // NOTE: Using Async Await
  const getApiData = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/post");
      setmyData(res.data);
    } catch (error) {
      setError(error.message);
    }
  }
  useEffect(() => {
    getApiData();
  }, [])
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Axiox Example</h1>
      {isError != "" && <h2>{isError}</h2>}
      <div className='grid'>
        {
          myData.slice(0, 12).map((post) => {
            const { id, title, body } = post;
            return <div className='card' key={id}>
              <h2>{title.slice(0, 20).toUpperCase()}</h2>
              <p>{body.slice(0, 100)}</p>
            </div>
          })
        }
      </div>
    </>
  )
}

export default App
