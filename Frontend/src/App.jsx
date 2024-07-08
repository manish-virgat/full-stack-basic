import './App.css'
import { useEffect, useState } from 'react'
import axios from 'axios'


function App() {

  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('/api/jokes')
      .then((response) => {
        console.log(response.data);
        if (Array.isArray(response.data))
          setJokes(response.data);
        else console.error("Not an Array")
      })
      .catch((e) => {
        console.log(e.response.data);
      })
  })

  return (

    <>
      <h1>Hello</h1>
      <p>Jokes: {jokes.length}</p>

      {
        jokes.map((joke, idx) => (
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
