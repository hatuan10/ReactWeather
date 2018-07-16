var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
	getInitialState: function () {
		return {
			isLoading: false
		}
	},
	handleSearch: function (location) {
		var that = this;

		this.setState({isLoading: true});

		openWeatherMap.getTemp(location).then(function (temp) {
			that.setState({
				location: location,
				temp: temp,
				isLoading: false
			});
		}, function (errMessage) {
			that.setState({isLoading: false});
			alert(errMessage);
			return <h3>{errMessage}</h3>
		});
	},
	render: function () {
		var {isLoading, temp, location} = this.state;

		function renderMessage () {
			if (isLoading) {
				return <h3>Featching Weather...</h3>
			} else if (temp && location) {
				return <WeatherMessage temp={temp} location={location}/>
			}
		}

		return (
			<div className="align-center">
				<h1>Weather Component</h1>
				<WeatherForm onSearch={this.handleSearch}/>
				{renderMessage()}
			</div>
		);
	}
});

module.exports = Weather;