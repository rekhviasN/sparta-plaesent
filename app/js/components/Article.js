import React from 'react';



export default class Article extends React.Component {

	constructor(props){
		super(props)
		this.state = { title: this.props.article.title,
					   author: this.props.article.author,
					   image: this.props.article.image,
					   date: this.props.article.date 
					}
	}

	componentWillMount(props){
		const months = { 
		  "Jan" : "January",
		  "Feb" : "February",
		  "Mar" : "March",
		  "Apr" : "April",
		  "May" : "May",
		  "Jun" : "June",
		  "Jul" : "July",
		  "Aug" : "August",
		  "Sep" : "September",
		  "Oct" : "October",
		  "Nov" : "November",
		  "Dec" : "December"
		}

		const date = new Date(this.props.article.date);
		let array = date.toString().split(" ").slice(1,4)
		array[0] = months[array[0]]
		const dateDisplay = array.join(" ")
		console.log(this.props.article, 'this.props.article')
		this.setState({ date: dateDisplay })
	}

	render() {
		return (
				<div className="article">
					<div className="articleImage">
						<img src={this.state.image} alt ="photo" />
					</div>
					<div className="articleDate">
						{this.state.date.toUpperCase()}
					</div>
					<div className="articleTitle">
						{this.state.title}
					</div>
					<div className="articleAuthor">
						Presented by <span className="author">{this.state.author.toUpperCase() }</span>
					</div>	
				</div>
			)
	}
}