import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'
import './index.css'

const PlanetsSlider = props => {
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  const {planetsList} = props
  return (
    <div className="slider-container" testid="planets">
      <h1>PLANETS</h1>
      <Slider {...settings}>
        {planetsList.map(eachItem => (
          <PlanetItem details={eachItem} key={eachItem.id} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
