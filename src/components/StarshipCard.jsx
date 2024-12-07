// starshipcard component with starship props
const StarshipCard = ({starship}) => {
  return (
    <>
    {/* maps a single starshipand its deets */}
      <h3>{starship.name}</h3>
      <p>Model: {starship.model}</p>
      <p>Manufacturer: {starship.manufacturer}</p>
    </>
  )
}

export default StarshipCard
