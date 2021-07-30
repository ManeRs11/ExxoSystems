<template>
  <div class="login">
      
      <div class="container">

        <b-row style="padding-bottom: 30px;">
              <b-col>
                <h3>Pagina Principal</h3>
              </b-col>

              <b-col>
              </b-col>

              <b-col>
              </b-col>

              <b-col>
                <div> 
                  <button style="width: 100%" @click="logout()" type="button" class="btn btn-info">Cerrar Session</button>
                </div>
              </b-col>            
          </b-row>

        
          <b-row>
              <b-col>
                <div> 

                  <div>
                    <b-tabs content-class="mt-3">
                      
                      <b-tab title="Apartado1" active>
                        Apartado1 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores consequatur ut fugiat officiis debitis alias illum eos quae, minus iure? Quaerat est esse tempore cupiditate cum repellat facere quisquam ullam?
                      </b-tab>

                      <b-tab title="Apartado2" >
                        Apartado2 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores consequatur ut fugiat officiis debitis alias illum eos quae, minus iure? Quaerat est esse tempore cupiditate cum repellat facere quisquam ullam?
                      </b-tab>
                      
                      <b-tab title="Apartado3" >
                        Apartado3 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores consequatur ut fugiat officiis debitis alias illum eos quae, minus iure? Quaerat est esse tempore cupiditate cum repellat facere quisquam ullam?
                      </b-tab>
                      
                      <!-- b-tab title="vacio" disabled><p>I'm a disabled tab!</p></b-tab -->
                    
                    </b-tabs>
                  </div>
                  
                    
                </div>
              </b-col>            
          </b-row>
        
      </div>
  </div>
</template>


<script>
// 
import firebase from 'firebase/app'
// const db = firebase.firestore()
export default {
  name: 'admin',
  data: function () {
    return {
      db: {},
      registro: {},
      ebook: {}
    }
  },
  // firestore: {
  //     registro: db.collection('Registro'),
  //     ebook: db.collection('ebook')
  // },
  mounted () {
    this.init()
  },
  methods: {
    async init () {
    },
    async logout () {
        firebase.auth().signOut().then(function() {
            window.location.href = "/"
        }, function(error) {
            console.log('error: ', error)
        });
    }
  }
}
</script>

<style scoped>  
.login {
    padding-top: 130px;
    padding-bottom:50px
}
.login .btn-info {
    color: #fff;
    background-color: #001645;
    border-color: #001645;
}
</style>
