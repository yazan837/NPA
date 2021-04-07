import {postData, fetchData} from './api'

export const fetchSignUp = formData =>
  postData('/auth/users/register', formData, 'auth')
export const fetchLogIn = formData =>
  postData('/auth/users/login', formData, 'auth')
export const fetchLogout = data => postData('/auth/users/logout', data)
export const fetchResetPassword = data =>
  postData('/auth/users/forgotPasswordByCode', data, null, 'passwordSetup')
export const fetchVerifyCode = data =>
  postData('/auth/users/verifyCode', data, 'auth')
export const fetchConfirmPassword = data =>
  postData('/auth/users/resetPassword', data)

export const fetchProfile = () => postData('/auth/users/login')
export const fetchEditProfile = data => postData('/auth/users/login', data)
