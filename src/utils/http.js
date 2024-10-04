import axios from "axios";

class Http {
  instance;

  constructor() {
    this.instance = axios.create({
      baseURL: 'https://api.spotify.com/v1',
      timeout: 10000
    });
    
    // Intercept requests
    this.instance.interceptors.request.use((config) => {
      // Add headers, token, or perform other actions before sending the request
      return config;
    }, (error) => {
      // Handle request error
      return Promise.reject(error);
    });
    
    // Intercept responses
    this.instance.interceptors.response.use((response) => {
      // Handle successful responses
      return response;
    }, (error) => {
      // Handle response errors
      return Promise.reject(error);
    });
  }
}

const http = new Http().instance;
export default http;
