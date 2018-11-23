import React, {
	Component
} from 'react';
import Card from './components/Card';
import 'core-js/es6/map';
import 'core-js/es6/set';
import 'core-js/fn/promise';
import axios from 'axios';


class App extends Component {
	state = {
		data: [],
		isLoaded: false,
	}

	componentDidMount() {
		axios.get('http://demo4452328.mockable.io/properties')
			.then(res => {
				const data = res.data;
				this.setState({
					isLoaded: true,
					data,
				})
			})

	}

	render() {
		const arr = this.state.data.data;

		return ( <
			div className = "container" >
			<
			div className = "row" > {
				this.state.isLoaded === true ? arr.map(item => ( <
					Card key = {
						item.id
					}
					src = {
						item.images[0]
					}
					adds = {
						item.full_address
					}
					val = {
						item.price
					}
					sq = {
						item.area
					}
					/>
				)) : ''
			} <
			/div> < /
			div >
		);
	}
}

export default App;