<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">NavBar</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Link</b-nav-item>
          <b-nav-item href="#" disabled>Disabled</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>

          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item @click="logout">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  //middleware: "authenticated",
  middleware: "authenticated",
  methods: {
    logout() {
      let _this = this
      this.$store.dispatch("signOut").then(()=>{
        _this.$router.push("/login");
      })
    }
  }
};
</script>

<style scoped>
header.masthead {
  height: 850px;
  background-color: #009fcc;
}

#mainNav .navbar-nav .nav-item .nav-link {
  font-size: 105%;
  color: #fed136;
} /*右上角menu按鈕*/

#mainNav .navbar-brand {
  height: 120px;
} /*左上角logo*/

/*下拉式選單--------------------------------*/

li.nav-item {
  /* 取消ul預設的內縮及樣式 */
  margin: 0;
  padding: 0;
  list-style: none;
}

ul.drop-down-menu {
  /* 取消ul預設的內縮及樣式 */
  margin: 0;
  padding: 0;
  list-style: none;
}

ul.drop-down-menu ul {
  /*隱藏次選單*/
  display: none;
}

ul.drop-down-menu li:hover > ul {
  /* 滑鼠滑入展開次選單*/
  display: block;
}
/*下拉式選單----------------------------------*/
</style>

