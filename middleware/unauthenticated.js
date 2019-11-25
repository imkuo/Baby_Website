export default async function({ store, redirect }) {
  if (store.state.user) {
    return redirect("/home")
  }
}
