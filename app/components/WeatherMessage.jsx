var React = require('react');

var WeatherMessage = ({temp, location}) => {
	return (
		<div class="align-center">
			<h2>Its is {temp} in {location}</h2>
		</div>
	);
}

module.exports = WeatherMessage;