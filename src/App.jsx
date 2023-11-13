import {puppyList} from './data.js'
import './App.css'
import { useState } from 'react';

function App() {
	const [puppies, setPuppies] = useState(puppyList);
	// console.log(puppies);
  return (
    <>
			{puppies.map((puppy) => {
				return <p key={puppy.id}>{puppy.name}</p>
				})
			}
    </>
  )
}

export default App
