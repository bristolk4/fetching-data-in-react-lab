import StarshipCard from './StarshipCard'
//starshiplist component w starships as prop
const StarshipList = ({starships}) => {
  return (
    <>
    {/* maps all starships w deets */}
      {starships.map((starship) => {
        {/* individual starship "card" w name specific to individual starship. starship data is prop */}
        return <StarshipCard key={starship.name} starship={starship} />
      })}
    </>
  )
}

export default StarshipList
