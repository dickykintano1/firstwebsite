import React from 'react';
import '../css/Home.css';
import '../css/General.css';
import CardList from '../CardList'
import DemoCarousel from '../Carousel'

class Home extends React.Component {
  constructor() {
	super()
		this.state = {
			recipes: [{id:1, name:'rendang'}, {id:2, name:'babi guling'}, {id:3, name:'sayur'}, {id:4, name:'ayam pop'},{id:5, name:'babi guling'}],
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
			<html className='html-home'>
				<h1 className='home-text'>Welcome to Cook Web<hr className='general-line'></hr></h1>
				<p className='home-paragraph'>Your everyday recipes, all in one place.<br></br>
					Learn, submit, and find out many recipes online.
				</p>
				<div className='carousel-container'>
					<DemoCarousel />
				</div>
				<h1 className='home-text'>Latest Recipes<hr className='general-line'></hr></h1>
				<div className='srchbar-container'>
					<input
						className='srchbar'
						type='search'
						placeholder='search recipe'
						onChange={this.onSearchChange}
					/>
				</div>
				<div className='cards-container'>
					{/* {filteredRecipes.map((item, i) => (
						<li key={i}>{item}</li>
					))} */}
					<CardList recipes={filteredRecipes}/>
				</div>
			</html>
		)
	};
}

export default Home;