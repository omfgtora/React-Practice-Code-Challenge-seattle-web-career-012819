import React, { Fragment } from 'react'

const Sushi = (props) => {
	return (
		<div className="sushi">
			<div className="plate" onClick={()=> props.eat(props.sushi)}>
				{ props.taken ?
					null
				:
					<img src={props.sushi.img_url} width="100%" />
				}
			</div>
			<strong>{props.sushi.name} - ${props.sushi.price}</strong>
		</div>
	)
}

export default Sushi