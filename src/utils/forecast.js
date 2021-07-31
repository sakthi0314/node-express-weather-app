const request = require("postman-request");

const forecast = (lat, long, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=b72c5e73a6e08ff634e5a019ac96b37c&query=${lat},${long}&units=f`;

  // Reqesting...
  request(
    {
      url,
      json: true,
    },
    (error, res) => {
      if (error) {
        callback(undefined, "unable to connect to weather services");
      } else if (res.body.error) {
        callback(undefined, "unable to find location");
      } else {
        callback(
          {
            summary: res.body.current.weather_descriptions,
            temperature: res.body.current.temperature,
          },
          error
        );
      }
    }
  );
};

module.exports = forecast;
