import axios from "axios"


const pexels = axios.create({
  baseURL: "https://api.pexels.com",
  headers: {
    Authorization: `${process.env.REACT_API_KEY}`
  }
})



export default pexels
