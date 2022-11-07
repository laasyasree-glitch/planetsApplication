import './index.css'

const PlanetItem = props => {
  const {details} = props
  const {name, imageUrl, description} = details
  return (
    <li>
      <img src={imageUrl} alt={`planet ${name}`} />
      <h1 className="name">{name}</h1>
      <p>{description}</p>
    </li>
  )
}
export default PlanetItem
