const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=ce990352a87a1b9ea2299ab2ed3af2bf&query=${ latitude },${ longitude }`;

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Error to connect to location server', undefined);
        } else if (body.error) {
            callback('Unable to find location', undefined);
        } else {
            const { temperature, feelslike, weather_descriptions } = body.current;
            callback(undefined, `${ weather_descriptions[0] }. It is currently ${ temperature } degress out. If feels like ${ feelslike } degress out.`);
        }
    })
}

module.exports = forecast;
