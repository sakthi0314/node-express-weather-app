const request = require("postman-request");

const geoCode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=pk.eyJ1Ijoic2FrdGhpMDMxNDIwMDEiLCJhIjoiY2tycXJydnlmMDlycjJubWozNjl4OHQ4YiJ9.iSLS2y1jEwNY3zPUh7kAow&limit=1`;

  // Requesting...
  request(
    {
      url,
      json: true,
    },
    (error, res) => {
      if (error) {
        callback("Unable to connect to location services", undefined);
      } else if (res.body.features.length === 0) {
        callback("Unable to findlocation. Try another search", undefined);
      } else {
        callback(undefined, {
          lat: res.body.features[0].center[0],
          long: res.body.features[0].center[1],
          location: res.body.features[0].place_name,
        });
      }
    }
  );
};

module.exports = geoCode;
