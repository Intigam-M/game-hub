import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "c13dbe79182e4eb798fc903e71803fef",
  },
});