import React from 'react';
import Article from './Article.js';

const data = [ 
{   date: "02/10/2017",
	title: "Bureau exquisite delightful carefully curated soft power.",
	author: "Lorem Ipsum",
	image: "js/public/1.png"
},
{
	date: "01/21/2017",
	title: "Esse airport veniam ryokan soft power.",
	author: "Lorem Ipsum",
	image: "js/public/4.png"
},
{
	date:"02/02/2017",
	title: "Sharp bureaux sleeply K-pop carefully curated.",
	author: "Lorem Ipsum",
	image: "js/public/2.png"
},
{	
	date: "01/18/2017",
	title: "K-pop extraordinary.",
	author: "Lorem Ipsum",
	image: "js/public/5.png"
},
{
	date: "01/27/2017",
	title: "St Moritz uniforms Beams.",
	author: "Lorem Ipsum",
	image: "js/public/3.png"
},
{
	date: "01/12/2017",
	title: "Artisanal iconic cutting-edge business class.",
	author: "Lorem Ipsum",
	image: "js/public/6.png"
}
]


export default class ArticleContainer extends React.Component{

	render(){

		const articles = data.map((item)=>{
			return <Article article={item} />
		})
	
		return (
				<div className="articleContainer">{ articles }</div>
		)
	}

}