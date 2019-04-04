import React, { Fragment } from 'react'

const Sushi = (props) => {
  const isEaten = () => {
    if (false) {
      return console.log('Eated')
    } else {
      return <img src={props.sushi.img_url} width="100%" />
    }
  }

  return (
    <div className="sushi">
      <div className="plate" 
           onClick={(event)=> {props.bill(props.sushi.price)}}>
        {isEaten()}
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  )
}

export default Sushi