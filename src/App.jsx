import {useState, useEffect} from 'react'
import StarshipSearch from './components/StarshipSearch'
import StarshipList from './components/StarshipList'

//state variables (store starships filtered and unfiltered)
const App = () => {
  const [starships, setStarships] = useState([])
  const [filteredStarships, setFilteredStarships] = useState([])

  //useEffect hook fetches data from swapi
  useEffect(() => {
    const getData = async () => {
      let response = await fetch('https://swapi.dev/api/starships/')
      let JSONdata = await response.json() // changes data to json
      setStarships(JSONdata.results) // set state with ALL starships
      setFilteredStarships(JSONdata.results) // sets filtered starships
    }
    getData() //call getData, GET data
  },[])

  //filters starship list with whatever's typed into the search bar 
  const handleSearch = (search) => {
    const filtered = starships.filter((starship) =>
      starship.name.includes(search) //checks to see if a starship has the letters typed into search bar, had to look up
    )
    setFilteredStarships(filtered) //update filtered starships state
  }

  return (
    <>
      <h1>Starship Search</h1>
      {/* search component and function */}
      <StarshipSearch onSearch={handleSearch} /> 
      {/* filtered starship list */}
      <StarshipList starships={filteredStarships} />
    </>
  )
}

export default App
