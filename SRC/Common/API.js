import axios from 'axios'
const LogIn = 'https://reqres.in/api';
const BaseUrl = 'https://dummyjson.com';
// const BaseUrl = `https://reqres.in/api/users?page=1`

module.exports = {
  async getProduct() {
    // console.log("Params: ", params === '');
    try {
      const response = await axios.get(`${BaseUrl}/products`)
      // console.log("API getProduct: ", response.data.products);
      return [await response.data.products, response.status];
    } catch (error) {
      console.log(error, ' error');
    }
  },

  async getSearchProduct(params) {
    // let search = null;
    // if (params === undefined || params === '') {
    //   search = '';
    // } else {
    //   search = `/search?q=${params}`;
    // }
    try {
      const response = await axios.get(`${BaseUrl}/products/search?q=${params}`)
      // console.log("SearchProduct response API : ", response.data);
      return [await response.data.products, response.status];
    } catch (e) { console.log(e, 'error') }
  },

  async signUp(params) {
    // console.log("Signup API: ", params);
    try {
      const response = await axios.post(`${LogIn}/register`, params);
      return [await response.data, response.status];
    } catch (e) {
      console.log(e, ' error');
    }
  },

  async logIn(params) {
    // console.log("Login API: ", params);
    try {
      const response = await axios.post(`${LogIn}/login`, params)
      // console.log("Login response API: ", response.data);
      return [await response.data, response.status];
    } catch (e) {
      console.log(e, ' error');
    }
  }
}



