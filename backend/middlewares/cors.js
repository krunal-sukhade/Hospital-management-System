const cors = require("cors");

const corsOptions = {
  origin: "https://hospital-management-system-sigma-one.vercel.app/",
  credentials: true,
  optionSuccessStatus: 200,
};

module.exports = cors(corsOptions);
