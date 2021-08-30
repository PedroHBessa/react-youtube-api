import axios from "axios";

const KEY = "AIzaSyCZzzHN3aXtyFBjR3G_D0JSPQaYmYpLei0";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 10,
    key: KEY,
  },
});
