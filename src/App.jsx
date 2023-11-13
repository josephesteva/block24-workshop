import {puppyList} from './data.js'
import './App.css'
import { useState } from 'react';

function App() {
	const [puppies, setPuppies] = useState(puppyList);
	const [featPupId, setFeatPupId] = useState(null);
	const featuredPup = puppies.find((pup) => pup.id === featPupId)
	// console.log(puppies);
  return (
    <>
			{puppies.map((puppy) => {
				return <p onClick={() => {
					setFeatPupId(puppy.id)
					console.log(featuredPup)
				}} key={puppy.id}>{puppy.name}</p>
			})
			}
			{/* <p>{featPupId}</p> */}
			{featPupId && (
				<div>
					<h2>{featuredPup.name}</h2>
					<ul>
						<li>Age: {featuredPup.age}</li>
						<li>Email: {featuredPup.email}</li>
					</ul>
				</div>
			)}
    </>
  )
}

export default App
