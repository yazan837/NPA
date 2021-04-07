import {fetchData, patchData, fileUpload} from './api'

export const fetchProfile = formData => fetchData('/auth/users/me')
export const patchProfile = formData =>
  patchData('/auth/users/profile', formData)
export const uploadProfilePhoto = formData => fileUpload(formData)
