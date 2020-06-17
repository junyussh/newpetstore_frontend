export default function ({
  store,
  redirect
}) {
  // If the user is authenticated redirect to home page
  if (process.client) {
    const token = localStorage.getItem('token');
    if (!token) {
      redirect('/login');
    } 
  } else if (process.server) {}
}
