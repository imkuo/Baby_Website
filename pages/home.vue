<template>
    <div>
<html lang="en">

<head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="">

  <title>Agency - Start Bootstrap Theme</title>

  <!-- Bootstrap core CSS -->
  <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

  <!-- Custom fonts for this template -->
  <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
  <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css">
  <link href='https://fonts.googleapis.com/css?family=Kaushan+Script' rel='stylesheet' type='text/css'>
  <link href='https://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic,700italic' rel='stylesheet' type='text/css'>
  <link href='https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700' rel='stylesheet' type='text/css'>

  <!-- Custom styles for this template -->
  <link href="css/agency.min.css" rel="stylesheet">
  <link href="css/mysetting.css" rel="stylesheet">

</head>

<body id="page-top">  <!--整個網頁-->

  <!-- Navigation -->
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">  <!--上方那排欄位整排橫的-->
    <div class="container"> <!--上方選項欄位那排(較窄)-->
      <a class="navbar-brand js-scroll-trigger" href="#page-top">寶貝潛能中心</a> <!--左上方的logo-->
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav text-uppercase ml-auto"> 
            <ul class="drop-down-menu">
              <li class="nav-item">  <!--每個li為上方每個選項-->
                 <a class="nav-link js-scroll-trigger" href="#">查看學生資料</a>
                  <ul>
                    <li><a href="#">小熊班</a>
                    </li>
                    <li><a href="#">大象班</a>
                    </li>
                    <li><a href="#">綿羊班</a>
                    </li>
                    <li><a href="#">河馬班</a>
                    </li>
                   </ul>
              </li>   
            </ul>
        </ul>
      

          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#">更改自班資料</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#">上傳兒童發展評估</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#">查詢兒童發展評估</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#">家長回饋單</a>
          </li>
           <li class="nav-item">
            <button @click.prevent="logout2">Logout</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- Header -->
  <header class="masthead">   <!--我需要的上半部網頁區塊-->
    <div class="container">
           <!-- <div class="intro-text"> 
                 </div>  -->
    </div>
  </header>     



  
  <!-- Bootstrap core JavaScript -->  <!--這些src不能刪，少了，螢幕變小menu叫不出來-->
  <script src="vendor/jquery/jquery.min.js"></script>
  <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

  <!-- Plugin JavaScript -->
  <script src="vendor/jquery-easing/jquery.easing.min.js"></script>

  <!-- Contact form JavaScript -->
  <script src="js/jqBootstrapValidation.js"></script>
  <script src="js/contact_me.js"></script>

  <!-- Custom scripts for this template -->
  <script src="js/agency.min.js"></script>

</body>

</html>

    </div>
</template>

<style scoped>
    header.masthead {
    height:850px;
    background-color:#009FCC;
}

#mainNav .navbar-nav .nav-item .nav-link{
    font-size:105%;
    color:#fed136;
} /*右上角menu按鈕*/



#mainNav .navbar-brand{
    height:120px;
}/*左上角logo*/



/*下拉式選單--------------------------------*/

li.nav-item{ /* 取消ul預設的內縮及樣式 */
    margin: 0;
    padding: 0;
    list-style: none;
}

ul.drop-down-menu{ /* 取消ul預設的內縮及樣式 */
    margin: 0;
    padding: 0;
    list-style: none;
}

ul.drop-down-menu ul { /*隱藏次選單*/
    display: none;
}

ul.drop-down-menu li:hover > ul { /* 滑鼠滑入展開次選單*/
    display: block;
}
/*下拉式選單----------------------------------*/




</style>

<script>
import firebase from 'firebase';

export default {
  methods:{
    logout2() {
     this.$store.dispatch("signOut");
    }
    }
};


</script>>