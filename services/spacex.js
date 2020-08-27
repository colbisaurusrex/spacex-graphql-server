const axios = require("axios");

const spacexURL = "https://api.spacexdata.com/v3";

function unPack(res) {
  return res.data;
}

function getAllLaunches() {
  return axios.get(`${spacexURL}/launches`).then(unPack);
}

function getLaunch({ id }) {
  return axios.get(`${spacexURL}/launches/${id}`).then(unPack);
}

function getUpcomingLaunches() {
  return axios.get(`${spacexURL}/launches/upcoming`).then(unPack);
}

function getNextLaunch() {
  return axios.get(`${spacexURL}/launches/next`).then(unPack);
}

module.exports = {
  getLaunch,
  getNextLaunch,
  getAllLaunches,
  getUpcomingLaunches,
};
