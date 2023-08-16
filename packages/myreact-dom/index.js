"use strict";

if (process.env.NODE_ENV === "production") {
  module.exports = require("./dist/cjs/client.production");
} else {
  module.exports = require("./dist/cjs/client.development");
}
