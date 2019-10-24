<template>
  <div id="app">
        <!-- date -->
        <div class="text-left text-white pl-5 font-weight-bold" id="date-text" style="background-color:#174970;font-family:sans-serif">
              {{new Date().toISOString().slice(0,10)}}
               <span class="float-right mr-4">
                 <small>Contact us: telugucricfilmyfreak@gmail.com</small>
               </span>
        </div>
      <div id="nav">
        <nav class="navbar navbar-expand-lg navbar-light shadow p-3" style="background-color:#EA2E2E">
          <a class="navbar-brand font-weight-semi-bold" style="color:#fff">TELUGU&nbsp;CRIC&nbsp;AND&nbsp;FILMYFREAKS</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <a class="nav-link">
                    <router-link to="/">DAILYPOSTS</router-link>
                  </a>
                </li>
                <li class="nav-item active">
                  <a class="nav-link">
                      <router-link to="/Technology">TECHNOLOGY</router-link>
                  </a>
                </li>
                <li class="nav-item active">
                  <a class="nav-link">
                      <router-link to="/Entertainment">ENTERTAINMENT</router-link>
                  </a>
                </li>
                <li class="nav-item active">
                  <a class="nav-link">
                      <router-link to="/Reviews">REVIEWS</router-link>
                  </a>
                </li>
                <li class="nav-item active">
                  <a class="nav-link">
                      <router-link to="/Sports">SPORTS</router-link>
                  </a>
                </li>
              </ul>
              <ul class="navbar-nav ml-auto text-white float-right">
                <span>
                  <a  href="https://www.facebook.com/Telugu-Cric-and-Filmy-freak-711734172592282/?hc_ref=ARSPkyc_5hpcTqDJ4EdiScwJhp0OXT3OlscLWG_LyyBYNGrRIv1aEbznmj6jt9avrnE&fref=nf&__xts__[0]=68.ARAVjmsnjBo7qmezjlujXbhnclUNnXhfy8pND9BB7iiuZaakQsbpETie6b0yY_1sTzx45UwIdJyHbVrKlCac2Y_V4aOUjxUwidotE9kcnEUacZLxyB6JN4XVjfhEvRdN1g1CHoV2P_qFIctpRMpnuXYSfzKMwIkQRLGcBGVYXJJw2iRQ9TqCBdJ-KGV3272PX66cl531Z-hBCfdzBifm_4Pbb4vwT_mMoOau4JOlR3DZzkCleFjVSI7HOP1d-zVVyLZBscNwdU_o_rM-rJdMoS7ZlEkeQ1DLn20v9qjj5O8nO5iHwimOzZ1HT9LgwdRQc9UCuGWxRlmi1ryb-EdWFYw&__tn__=kC-R" style="color:#fff"><i class="fa fa-1x fa-facebook-square" aria-hidden="true"></i></a>
                </span>
                <span><i class="fa fa fa-instagram ml-3" aria-hidden="true"></i></span>
              </ul>
            </div>
        </nav>
      </div>
      <router-view/>
      <div class="container-fluid text-white" id="foot">
        <foot/>
      </div>
        <p class="text-center bg-black font-weight-bold">copyright&copy;TelugucricandFilmyfreak</p>
  </div>
</template>
<script>
import Vue from 'vue'
import foot from './components/footer'
export default {
  data:()=> {
              return {}
            },
  crdeated:{},
  mounted(){},
  methods:{
  },
  components:{foot}
}
</script>
<style>
#nav a{
  text-decoration: none;
  color:#fff;
  font-family: 'Oswald', sans-serif;
}
#date-text{
    font-family: 'Oswald', sans-serif;
}
#foot{
  background-color:#222222;font-family: 'Oswald', sans-serif;
  margin-top: 10px;
}
</style>
