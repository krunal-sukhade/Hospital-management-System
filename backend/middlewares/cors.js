const cors = require("cors");

const corsOptions = {
  origin: "https://hospital-management-system-gekl.onrender.com/",
  credentials: true,
  optionSuccessStatus: 200,
};

module.exports = cors(corsOptions);
