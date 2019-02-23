import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 967ca32bde2e4ced4058ff713407aac51a842964bb15324ee64fd1b51bf9e56d"
  }
});
