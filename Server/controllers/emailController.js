const fetch = require("node-fetch");
const FormData = require("form-data");
const ApiError = require("../error/ApiError");

class emailController {
  async create() {
    try {
      const { tel, email, desc } = req.body;
    } catch (e) {
      console.error(e);
    }
  }
}

module.exports = new emailController();
