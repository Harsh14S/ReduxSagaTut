import axios from 'axios'
import { Alert } from 'react-native';
const LogInUrl = 'https://reqres.in/api';
const BaseUrl = 'https://dummyjson.com';
const UserDataUrl = 'https://reqres.in/api/users?page=1';
const UserProfileUrl = 'https://reqres.in/api/users?page=1';
// const BaseUrl = `https://reqres.in/api/users?page=1`

module.exports = {
  async getUserData() {
    try {
      const response = await axios.get(`${UserDataUrl}`)
      // console.log("API getUserData: ", response.data);
      return [await response.data, response.status];
    } catch (error) {
      console.log(error, ' error');
    }
  },

  async getUserProfile(params) {
    // console.log("API Params: ", params);
    try {
      const response = await axios.get(`${UserProfileUrl}`)
      // console.log("API getUserProfile: ", response.data.data);
      const UserData = await response.data.data;
      const UserProfile = UserData.filter((item, index) => item.email === params);
      // console.log("UserProfile: ", UserProfile[0]);
      // UserData.filter((item, index) => console.log(item.email === params))

      return UserProfile[0];
    } catch (error) {
      console.log(error, ' error');
    }
  },

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
    } catch (e) { console.log('error: ', e) }
  },

  async signUp(params) {
    // console.log("Signup API: ", params);
    try {
      const response = await axios.post(`${LogInUrl}/register`, params);
      return [await response.data, response.status];
    } catch (e) {
      console.log('error: ', e);
    }
  },

  async logIn(params) {
    // console.log("Login API: ", params.user);
    try {
      const response = await axios.post(`${LogInUrl}/login`, params.user)
      // console.log("Login response API: ", response.data);
      params.navigation.navigate('LoginDetails', params.user)
      return { email: params.user.email, apiResponse: [await response.data, response.status] };
      // return [await response.data, response.status];
    } catch (e) {
      console.log('error: ', e);
      Alert.alert("Please enter valid Email ID !!!")
    }
  }
}



