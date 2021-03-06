const request = require('request')

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${ encodeURIComponent(address) }.json?access_token=pk.eyJ1IjoiZGVlbGlnaHQiLCJhIjoiY2wxMmQ3cjFyMmg4ZjNia2I1N3JsdWl0byJ9.cZ9afkMASE23hoECOmpnXA&limit=1`;

    request({ url, json: true }, (error, response) => {
        const { features } = response.body;
        if (error) {
            callback('Unable to connect to location services!', undefined);
        } else if (!features.length) {
            callback('Unable to find location. Try another search', undefined);
        } else {
            callback(undefined, {
                latitude: features[0].center[1],
                longitude: features[0].center[0],
                location: features[0].place_name,
            })
        }
    })
}

module.exports = geocode;
