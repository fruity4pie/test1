import React, { Component } from 'react'
import Image from './Image';
import Address from './Address';
import Price from './Price';
import Area from './Area';


class Card extends Component {
	render () {
		const {src, adds, val, sq} = this.props;
		return (
			<div className="col-lg-3 col-md-4">
				<div className="card-deck">
					<div className="card">
						<Image src={src} />
						<div className="card-body">
							<Address adds={adds} />
							<Price val={val} />
							<Area sq={sq} />
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Card;