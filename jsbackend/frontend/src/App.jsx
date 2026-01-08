import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

function App() {
 
  const [ jokes, setJokes ] = useState([])

  useEffect(() => {
    axios.get('/api/jokes')
    .then((response) => {
      setJokes(response.data)
    })
    .catch((error) => {
      console.log('Error fetching jokes:', error)
    })
  })

  return (
    <>
      <div>Amaan</div>
      <p>Jokes : {jokes.length}</p>
     
     {
      jokes.map((joke) => {
        return (
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
          
        )
      })
     }
    </>
  )
}

export default App
