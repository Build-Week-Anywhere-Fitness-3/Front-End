import axios from 'axios';

// A helper function so we don't have to keep repeating this
export function getToken() {
  return localStorage.getItem("token")
}

export const axiosWithAuth = () => {
  const token = localStorage.getItem('token');
  return axios.create({
    baseURL: 'https://anywhere-fitness-lambda.herokuapp.com/',
    headers: {
      Authorization: token
    }
  })
}