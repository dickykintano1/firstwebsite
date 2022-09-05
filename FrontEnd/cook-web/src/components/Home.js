import React from 'react';
import './Home.css';

class Home extends React.Component {
  constructor() {
    super()
		this.state = {
			recipes: ['rendang', 'babi guling', 'sayur'],
			searchfield: ''
		}
  };

	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value})
	};

	render() {
		const filteredRecipes = this.state.recipes.filter(recipe =>{
			return recipe.toLowerCase().includes(this.state.searchfield.toLowerCase())
		});

		return(
			<div className=''>
				<div className=''>
					<input
            className='position-relative'
						type='search'
						placeholder='search recipe'
						onChange={this.onSearchChange}
					/>
				</div>

				<ul>
					{filteredRecipes.map((item, i) => (
						<li key={i}>{item}</li>
					))}
        </ul>
			</div>
		)
	};
}

export default Home;