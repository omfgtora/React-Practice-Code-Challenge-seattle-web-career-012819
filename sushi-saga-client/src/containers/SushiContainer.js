import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  let sushis = props.getSushiSet()

  return (
    <Fragment>
      <div className="belt">
        {sushis.map((sushi, idx)=>{
          return <Sushi key={idx} sushi={sushi} bill={props.bill} />
        })}
        <MoreButton moreSushi={props.moreSushi} getSushiSet={props.getSushiSet} />
      </div>
    </Fragment>
  )
}

export default SushiContainer