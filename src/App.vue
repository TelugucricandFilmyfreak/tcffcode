<template>
  <div id="app">
        <!-- date -->
        <div class="text-left text-white pl-2" id="date-text" style="background-color:#282869">
              {{new Date().toLocaleString()}} <span class="float-right mr-4">VISIT-US&nbsp;/<i class="fa fa-1x fa-facebook-square" aria-hidden="true"></i></span>
        </div>
      <div id="nav">
        <nav class="navbar navbar-expand-lg navbar-light bg-white shadow p-3 ">
          <a class="navbar-brand font-weight-bold" style="color:#282869">TELUGU&nbsp;CRIC&nbsp;AND&nbsp;FILMYFREAKS</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <a class="nav-link font-weight-bold">
                    <router-link to="/">DAILYPOSTS</router-link>
                  </a>
                </li>
                <li class="nav-item active">
                  <a class="nav-link font-weight-bold">
                      <router-link to="/Technology">TECHNOLOGY</router-link>
                  </a>
                </li>
                <li class="nav-item active">
                  <a class="nav-link font-weight-bold">
                      <router-link to="/Entertainment">ENTERTAINMENT</router-link>
                  </a>
                </li>
                <li class="nav-item active">
                  <a class="nav-link font-weight-bold">
                      <router-link to="/Reviews">REVIEWS</router-link>
                  </a>
                </li>
                <li class="nav-item active">
                  <a class="nav-link font-weight-bold">
                      <router-link to="/Sports">SPORTS</router-link>
                  </a>
                </li>
              </ul>
            </div>
        </nav>
      </div>
      <router-view/>
      <div class="container-fluid text-white" id="foot">
        <foot></foot>
      </div>
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
  color:black;
  font-family: 'Oswald', sans-serif;
}
#date-text{
    font-family: 'Oswald', sans-serif;
}
#foot{
  background-color: rgb(40, 40, 105);font-family: 'Oswald', sans-serif;
  margin-top: 10px;
}
</style>
