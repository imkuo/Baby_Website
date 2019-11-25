export default async function({ store, redirect }) {
  if (!store.state.user) {
    return redirect("/login");
  } else {
    return redirect("/home")
  }
}
