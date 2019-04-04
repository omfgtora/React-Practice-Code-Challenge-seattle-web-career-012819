import React, { Fragment } from 'react'

const Sushi = (props) => {
  const checkEaten = () => {
    if (props.sushi.isEaten) {
      return null
    } else {
      return <img src={props.sushi.img_url} width="100%" />
    }
  }

  const handleClick = () => {
    props.bill(props.sushi)
    props.updateEaten(props.sushi)
  }

  return (
    <div className="sushi">
      <div className="plate" 
           onClick={handleClick}>
        {checkEaten()}
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  )
}

export default Sushi