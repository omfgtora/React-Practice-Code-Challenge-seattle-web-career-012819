import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  let sushis = () => {
    let sushiSet = props.getSushiSet()
    return sushiSet.map((sushi)=>{
      return <Sushi sushi={sushi} bill={props.bill} updateEaten={props.updateEaten} />
    })
  }

  return (
    <Fragment>
      <div className="belt">
        {sushis()}
        <MoreButton moreSushi={props.moreSushi} getSushiSet={props.getSushiSet} />
      </div>
    </Fragment>
  )
}

export default SushiContainer