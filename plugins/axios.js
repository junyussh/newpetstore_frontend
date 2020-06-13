export default ({
  $axios,
  redirect,
  store
}) => {
  $axios.onRequest(config => {
    if (process.client) {
      if (store.state.Login.token) {
        config.headers.authorization = 'Bearer ' + store.state.Login.token
      }
    }
  })
}
