const germany = require("./routeHandlers/germany");
const stateInfo = require("./routeHandlers/stateInfo");
const { allCases, latestCases } = require("./routeHandlers/cases");
const { allDeaths, latestDeaths } = require("./routeHandlers/deaths");

module.exports.germany = germany;
module.exports.stateInfo = stateInfo;
module.exports.latestCases = latestCases;
module.exports.allCases = allCases;
module.exports.latestDeaths = latestDeaths;
module.exports.allDeaths = allDeaths;
