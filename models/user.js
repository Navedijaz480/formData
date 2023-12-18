const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");
const user = new mongoose.Schema({
  name: {
    type: String,
  },
  FatherName: {
    type: String,
  },
  cnicNo: {
    type: Number,
  },
  email: {
    type: String,
  },
  noOfForm: {
    type: String,
  },
  totalBirds: {
    type: String,
  },
  tehsil: {
    type: String,
  },
  district: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  cellNO: {
    type: String,
  },
  permanentResidency: {
    type: String,
  },
  businessResidency: {
    type: String,
  },

  Qualification: {
    type: String,
  },
});

//for password
user.methods.comparePassword = async function (password) {
  try {
    return await bcryptjs.compare(password, this.password);
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = mongoose.model("User", user);
