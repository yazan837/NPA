import {postData, fetchData, fileUpload} from './api'

export const fetchActivity = userId =>
  fetchData(
    `/types/activities/all?query=${encodeURIComponent(
      JSON.stringify({
        trash: {$in: false},
        createdBy: {$in: userId},
      }),
    )}`,
  )

export const fetchMyRewards = userId =>
  fetchData(
    `/types/taken_award?query=${encodeURIComponent(
      JSON.stringify({
        trash: {$in: false},
        createdBy: {$in: userId},
      }),
    )}`,
  )

export const fetchRewards = () => fetchData('/types/rewards/all')
export const fetchCategory = () => fetchData('/types/categories/all')
export const fetchActivityCategory = () => fetchData('/types/cat_activity/all')
export const fetchAllactivity = () => fetchData('/types/all_activities')
export const fetchDashbord = () => fetchData('/types/dashbord/all')
export const fetchVendors = () => fetchData('/types/vendors/all')
export const fetchAbout = () => fetchData('/types/screens')
export const uploadfile = formData => postData('/types/activities', formData)
export const uploadPhoto = formData => fileUpload(formData)
export const fetchCopon = formData =>
  postData('/types/coupon_code/pickreward', formData)

export const takeAward = formData => postData('/types/taken_award', formData)

// export const fetchCopon = (_id) =>
//   fetchData(
//     `/types/coupon_code/all?query=${encodeURIComponent(
//       JSON.stringify({trash: {$in: false}, rewards: {$in: _id}}),
//     )}`,
//   );
