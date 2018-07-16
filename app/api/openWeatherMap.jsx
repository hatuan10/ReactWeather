var axios = require('axios');

//86514040dcf60b1048bf41b8141ad044

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=86514040dcf60b1048bf41b8141ad044';

module.exports = {
	getTemp: function (location) {
		var encodedLocation = encodeURIComponent(location);
		var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

		return axios.get(requestUrl).then(function (res) {
			if (res.data.cod && res.data.message) {
				throw new Error(res.response.data.message);
			} else {
				return res.data.main.temp;
			}
		}, function (res) {
			throw new Error(res.response.data.message);
		}); 
	}
} 