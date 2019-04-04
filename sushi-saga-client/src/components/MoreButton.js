import React from 'react'

const MoreButton = (props) => {
    const handleClick = () => {
      props.getSushiSet()
      props.moreSushi()
    }
    return <button onClick={handleClick}>
            More sushi!
          </button>
}

export default MoreButton