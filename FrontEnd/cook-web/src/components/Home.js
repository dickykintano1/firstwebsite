import React from 'react';
import './Home.css';
import CardList from './CardList'

class Home extends React.Component {
  constructor() {
    super()
		this.state = {
			recipes: [{id:1, name:'rendang'},{id:2, name:'babi guling'}, {id:3, name:'sayur'}],
			searchfield: ''
		}
  };

	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value})
	};

	render() {
		const filteredRecipes = this.state.recipes.filter(recipe =>{
			return recipe.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		});

		return(
			<div className='parent'>
				<div className='srchbar-container'>
					<input
            			className='srchbar'
						type='search'
						placeholder='search recipe'
						onChange={this.onSearchChange}
					/>
				</div>
				<div>
					{/* {filteredRecipes.map((item, i) => (
						<li key={i}>{item}</li>
					))} */}
					<CardList recipes={filteredRecipes}/>
				</div>
			</div>
		)
	};
}

export default Home;