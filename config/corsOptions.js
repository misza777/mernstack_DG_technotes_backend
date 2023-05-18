const allowedOrigins = require("./allowedOrigins");

const corsOptions = {
  origin: (origin, callback) => {
    // !origin can allow for f.ex. postman
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  //header "Access-Control-Allow-Credentials" must be set to true
  credentials: true,
  optionsSuccessStatus: 200,
};

module.exports = corsOptions;
