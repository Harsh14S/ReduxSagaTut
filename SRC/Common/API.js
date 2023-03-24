import axios from 'axios'
const BaseUrl = 'https://dummyjson.com';
// const BaseUrl = `https://reqres.in/api/users?page=1`

module.exports = {
  async getProduct(params) {
    // console.log("Params: ", params === '');
    let search = null;
    if (params === undefined || params === '') {
      search = '';
    } else {
      search = `/search?q=${params}`;
    }
    try {
      const response = await axios.get(`${BaseUrl}/products${search}`)
      // console.log("API getProduct: ", response.data.products);
      return [await response.data.products, response.status]
    } catch (error) {
      console.log(error, 'error');
    }
  },

  // async getSearchProduct(params) {
  //   try {
  //     const response = await axios.get(`${BaseUrl}/products/search?q=${params}`)
  //     // console.log("API getSearchProduct: ", response.data.products);
  //     return [await response.data.products, response.status]
  //   } catch (error) {
  //     console.log(error, 'error');
  //   }
  // }
}



