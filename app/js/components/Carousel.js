var React = require('react');
var Slider = require('react-slick');

var SimpleSlider = React.createClass({
  render: function () {
    var settings = {
      dots: true,
      autoplay: true,
      autoplaySpeed: 5000,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="carousel">
        <Slider {...settings}>
          <div><img src="js/public/panel.jpg"/></div>
          <div><img src="js/public/panel.jpg"/></div>
          <div><img src="js/public/panel.jpg"/></div>
        </Slider>
      </div>
    );
  }
});

export default SimpleSlider;