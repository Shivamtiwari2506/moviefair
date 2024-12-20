import axios from 'axios'

const instance = axios.create({
   baseURL: "https://api.themoviesdb.org/3",
   headers: {
      accept: 'application/json',
      Authorization: 'Bearer 76deadecb4e996be0639c6b2a624a68c'
   }  
});

export default instance