<template>
  <div>

      <div>
        <b-navbar fixed="top" toggleable="lg" type="info" variant="info" class="border-bottom">
          <div class="container">
            <b-navbar-brand href="/">
              <img src="./../assets/logos/logo.png" class="logo" alt="">
            </b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
             <b-collapse id="nav-collapse" is-nav>              
              <b-navbar-nav class="ml-auto">
                <b-nav-form>

                  <b-nav-item><router-link to="/"><strong>EXXO</strong> Systems</router-link></b-nav-item>
                  
                  
                </b-nav-form>
              </b-navbar-nav>
             </b-collapse>
          </div>
        </b-navbar>
      </div>
        

  </div>
</template>

<script>
export default {
  name: 'headn'
}
</script>

<style scoped>

@media (max-width:850px) and (orientation : landscape) {
  .logo {
    width: 170px !important;
  }
  .form-inline {
    display: block !important;
  }
}

@media (max-width:768px) and (orientation : portrait) {
  .logo {
    width: 140px !important;
  }
  .form-inline {
    display: block !important;
  }
}


.navbar-toggler {
  border: 1px solid #1d1d1d45; 
  color: #000000 !important;
}

.logo {
  width: 200px;
}
.bg-info {
    background-color: #ffffff !important;
    color: #012d33 !important;
}
a {
    color: #001545;
    text-decoration: none;
    background-color: transparent;
}
a:hover {
    color: #001545;
    text-decoration: none;
    background-color: transparent;
}

</style>
