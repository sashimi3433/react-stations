// @ts-check
import { useEffect, useState } from "react"
import { BreedsSelect } from "./BreedsSelect"

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState('affenpinscher');
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(response => response.json())
      .then((data) => {
        setBreeds(Object.keys(data.message))
      })
  }, []);

  return (
    <>
      <BreedsSelect breeds={breeds} selectedBreed={selectedBreed} setSelectedBreed={setSelectedBreed} />
      <button onClick={() => {
        fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random/3`)
          .then(response => response.json())
          .then((data) => {
            setDogs(data.message)
          })
      }}>表示</button>
      <ul>
        {dogs.map((v) => (
          <li key={v}>
            <img src={v} />
          </li>
        ))}
      </ul>
    </>
  )
}

export default DogListContainer