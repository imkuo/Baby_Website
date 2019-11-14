<template>
  <!doctype html>
  <!--<html>

<head>
    <title>My Awesome Login Page</title>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" integrity="sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP" crossorigin="anonymous">
    <link rel="stylesheet" href="./bootstrap-login.css">
</head>
  <!--Coded with love by Mutiullah Samim-->

  <!--<body> -->
  <div class="container h-100">
    <div class="d-flex justify-content-center h-100">
      <div class="user_card">
        <div class="d-flex justify-content-center">
          <div class="brand_logo_container">
            <img src="./logo.png" class="brand_logo" alt="Logo" />
          </div>
        </div>
        <div class="d-flex justify-content-center form_container">
          <form>
            <div class="input-group mb-3">
              <div class="input-group-append">
                <span class="input-group-text">
                  <i class="fas fa-user"></i>
                </span>
              </div>
              <div class="group">
                <!-- <label class="label" for="location">
                  				  ◾班級
                				</label><br>
                                <input type="radio" name="location" value="Taipei"> 大象 <br>
                                <input type="radio" name="location" value="Taoyuan"> 小熊 <br>
                                <input type="radio" name="location" value="Taoyuan"> 綿羊 <br>
                <input type="radio" name="location" value="Taoyuan"> 河馬 <br>-->
                <input
                  v-model="email"
                  type="text"
                  name
                  class="form-control input_pass"
                  value
                  placeholder="account"
                />
              </div>
              <br />
            </div>
            <div class="input-group mb-2">
              <div class="input-group-append">
                <span class="input-group-text">
                  <i class="fas fa-key"></i>
                </span>
              </div>
              <input
                v-model="password"
                type="password"
                name
                class="form-control input_pass"
                value
                placeholder="password"
              />
            </div>
            <div class="form-group">
              <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="customControlInline" />
                <label class="custom-control-label" for="customControlInline">Remember me</label>
              </div>
            </div>
          </form>
        </div>
        <div class="d-flex justify-content-center mt-3 login_container">
          <button @click="login" class="btn login_btn">Login</button>
        </div>
        <div class="mt-4">
          <div class="d-flex justify-content-center links">
            Don't have an account?
            <a href="/Sign-up" class="ml-2">Sign Up</a>
          </div>
          <div>user:{{username()}}</div>
          <div class="d-flex justify-content-center links">
            <a href="#">Forgot your password?</a>
          </div>

          <div class="logout">
            <button @click.prevent="logout">Logout</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- </body>

  </html>-->
</template>

<script>
import firebase from "firebase";

export default {
  name: "login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login() {
      this.$store.dispatch("signInWithEmail", {
        email: this.email,
        password: this.password
      })
      .then(()=>{
          this.$router.push("/home")
      });
    },
    // login:function(){

    //     console.log("Data", this.email, this.password)
    //     firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
    //         function(user){
    //             alert('Well done ! You are now connected')
    //             console.log('login_sucessful');

    //         },
    //         function(err){
    //             alert('Oops.'+err.message)
    //             console.log('fai_login');
    //         }

    //     )

    //     // firebase.auth().currentUser()
    //     //this.$router.replace('home');
    // },

    logout: function() {
     this.$store.dispatch("signOut");
    },
    username() {
      return this.$store.state.user ? this.$store.state.user.email : "N/A";
    }
  }
};
</script>



<style scoped>
/* Coded with love by Mutiullah Samim */

/*body, */
/*html { */
margin: 0;
padding: 0;
height: 100%;
/*background:#0088A8!important;*/
background: #009fcc !important;
/* } */

.custom-control {
  margin-top: 24px;
  text-align: center;
}

.user_card {
  height: 580px;
  width: 350px;
  margin-top: 200px;
  background: #ffbb00;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -moz-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 5px;
}

.group {
  margin-left: 24px;
}

.brand_logo_container {
  position: absolute;
  height: 200px;
  width: 200px;
  top: -100px;
  border-radius: 20px 20px 20px 20px;
  background: #227700;
  padding: 10px;
  text-align: center;
}

.brand_logo {
  height: 180px;
  width: 180px;
  border-radius: 10px 10px 10px 10px;
  border: 2px solid white;
}

.form_container {
  margin-top: 50px;
}

.login_btn {
  width: 100%;
  background: #c0392b !important;
  color: white !important;
}

.login_btn:focus {
  box-shadow: none !important;
  outline: 0px !important;
}

.login_container {
  padding: 0 2rem;
}

.input-group-text {
  background: #c0392b !important;
  color: white !important;
  border: 0 !important;
  border-radius: 0.25rem 0 0 0.25rem !important;
}

.input_user,
.input_pass:focus {
  box-shadow: none !important;
  outline: 0px !important;
}

.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {
  background-color: #c0392b !important;
  .label {
    float: left;
    width: 100px;
  }
}

.logout {
  text-align: center;
  margin-top: 20px;
}
</style>

