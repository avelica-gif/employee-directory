import axios from "axios";
const BASEURL = "https://randomuser.me/api/?results=50";
// eslint-disable-next-line
export default {
  loadUsers: function () {
    return axios.get(BASEURL);
  },
};


