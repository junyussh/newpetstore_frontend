export default function ({
  store,
  redirect
}) {
  if (!store.state.Login.token) {
    // console.log(store.state.Login)
    redirect("/login")
  }
  // If the user is authenticated redirect to home page
  if (process.client) {
    // const token = localStorage.getItem('token');
    // if (!token) {
    //   redirect('/login');
    // } 
  } else if (process.server) {}
}
