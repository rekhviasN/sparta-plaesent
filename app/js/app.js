import React from 'react';
import {render} from 'react-dom';
import Carousel from './components/Carousel.js';
import Header from './components/Header.js';
import ArticleContainer from './components/ArticleContainer.js';
import Footer from './components/Footer.js'

class App extends React.Component {
  render () {
    return( 
    	<div>
    		<Header />
        	<Carousel />
           	<ArticleContainer />
           	<Footer />
    	</div>
    )	
  }
}

render(<App/>, document.getElementById('app'));
