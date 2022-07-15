import axios from 'axios'

const API_URL = 'https://api.dev.examinenew.com/'

// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL + 'register', userData)
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }
  return response.data
}

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + 'login', userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }
  return response.data
}

// Logout user
const logout = () => {
  localStorage.clear()
}

// forgot password
const forgotPassword = async (email) => {
  let body = {
    email: 'graham.langworth@example.com',
  }
  const response = await axios.post(API_URL + 'forgot-password', body)

  console.log(response)
  return response.data
}

const userInfo = async () => {
  const token = '20|GvKOPUEVpbUGJZr4cOhRxbMge5DB4LS46GljUHpU'

  const response = await axios.get(API_URL + 'v1/user', {
    headers: { Authorization: `Bearer ${token}` },
  })

  console.log(response)
  return response.data
}

const authActions = {
  register,
  logout,
  login,
  forgotPassword,
  userInfo,
}

export default authActions
