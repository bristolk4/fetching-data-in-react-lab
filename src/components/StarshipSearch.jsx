import {useState} from 'react'

//onsearch is prop AND function... mildly confused and used chatgpt here but I kind of understand
const StarshipSearch = ({onSearch}) => { 
    //set state variable for search to store whaatever is currently typed into search bar
  const [search, setSearch] = useState('')
    //update search state, lift up to app.jsx
  const handleChange = (event) => {
    const value = event.target.value //get value from search bar
    setSearch(value) //updates search value in this component
    onSearch(value) //submarine that goes down into StarshipSearch to get search value,
    //then goes back up into app.jsx to transfer the info :)
  }

  return (
    <>
    {/* search bar label */}
    <label htmlFor='search'>Search: </label>
    {/* search value is SEARCH STRING? when stuff is typed (onchange) handlechange goes */}
    <input type='text' value={search} onChange={handleChange}/>
    </>
  )
}

export default StarshipSearch
