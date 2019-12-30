// import axios from 'axios'
// // import { Message, MessageBox } from 'element-ui'
// // import Account from '@/store/account'
//
// function DataGet({ url, onOk = (data) => {}, onDone = (any) => {} }) {
//   axios({
//     url: url,
//     method: 'get',
//   }).then( (resp) => {
//     console.log(resp)
//     const data = resp.data
//     onOk(data)
//     onDone("ok")
//   }).catch( (err) => {
//     console.log('err' + err) // for debug
//     // Message({
//     //   message: err.message,
//     //   type: 'err',
//     //   duration: 5 * 1000
//     // })
//     onDone(err)
//   })
// }
//
// function JsonPost({ url, params, onOk = (data) => {}, onDone = (any) => {} }) {
//   var headers = {}
//   headers['Content-Type'] = 'application/json'
//   if (Account.account.token) {
//     headers['Authorization'] = Account.account.token
//   }
//   axios({
//     baseURL: process.env.BASE_API,
//     url: url,
//     method: 'post',
//     headers: headers,
//     data: params
//   }).then( (resp) => {
//     const data = resp.data
//     if (data.code === 0) {
//       onOk(data)
//     } else {
//       if (data.code === -2) {
//         MessageBox.confirm('登录信息失效', '确定登出', {
//           confirmButtonText: '重新登录',
//           type: 'warning'
//         }).then(() => {
//           Account.cleanAccount()
//           location.reload() // 为了重新实例化vue-router对象 避免bug
//         })
//       } else {
//         // Message({
//         //   message: data.message,
//         //   type: 'info',
//         //   duration: 3 * 1000
//         // })
//       }
//     }
//     onDone(data)
//   }).catch( (err) => {
//     console.log('err' + err) // for debug
//     // Message({
//     //   message: err.message,
//     //   type: 'err',
//     //   duration: 5 * 1000
//     // })
//     onDone(err)
//   })
// }
//
// function FilePost({ url, file, params, onOk = (url) => {}, onErr = (err) => {}, onProgress = (p) => {} }) {
//   var headers = {}
//   headers['Content-Type'] = 'multipart/form-data'
//   if (Account.account.token) {
//     headers['Authorization'] = Account.account.token
//   }
//   const formData = new FormData();
//   formData.append('file', file);
//   if (params != null && params.length > 0) {
//     for(let key in params) {
//       formData.append(key, params[key])
//     }
//   }
//   axios({
//     baseURL: url,
//     url: url,
//     method: 'post',
//     headers: headers,
//     data: formData,
//     onUploadProgress: progressEvent => {
//       let p = (progressEvent.loaded / progressEvent.total * 100 | 0)
//       onProgress(p)
//     }
//   }).then( (resp) => {
//     let data = resp.data
//     console.log(data)
//     if (data.code === 0) {
//       onOk(data.data)
//     } else {
//       onErr(data.message)
//     }
//   }).catch( (err) => {
//     onErr(err.message)
//   })
// }
//
// export default { DataGet, JsonPost, FilePost }
