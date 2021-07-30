<template>
  <div class="login">
      
      <div class="container">
          <b-row>
            
            <b-col>
              <h2>
                <p>
                  <strong>EXXO Systems</strong>
                </p>
              </h2>

                <b-card
                    title="Inicia Sesión"
                    img-top
                    tag="article"
                    class="mb-2 square">
                    
                    <b-card-text>
                        <b-form inline>
                            <label class="sr-only" for="inline-form-input-username">Correo</label>
                            <b-input-group prepend="@" class="mb-2 mr-sm-2 mb-sm-0" style="width: 100%;">
                                <b-form-input v-model="email" id="inline-form-input-username" placeholder="Correo"></b-form-input>
                            </b-input-group>
                            <br>
                            <label class="sr-only" for="inline-form-input-username">Contraseña</label>
                            <b-input-group prepend="#!" class="mb-2 mr-sm-2 mb-sm-0" style="width: 100%;">
                                <b-form-input type="password" v-model="password" id="inline-form-input-username" placeholder="Contraseña"></b-form-input>
                            </b-input-group>
                        </b-form>    
                    </b-card-text>
                    <b-button @click="login()" variant="danger">Acceder</b-button>
                    <p>{{error}}</p>
                </b-card>
            
            </b-col>  
          </b-row>
        

      </div>
  </div>
</template>


<script>
import firebase from 'firebase/app'
export default {
  name: 'login',
  data: function () {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  mounted () {
    this.init()
  }, 
  methods: {
    async init () {
      firebase.auth().onAuthStateChanged(function (user){
        if (user !== null) {
          window.location.href = '/admin'
        }
      })
    },
    async login () {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
        (user) => {
          if (!this._.isUndefined(user)) {
            this.$router.replace('admin')
          } else {
            this.error = 'El usuario o contraseña son incorrectos, verifica'
          }
        }
      )
    }
  }
}
</script>

<style scoped>  
.login {
    padding-top: 130px;
    padding-bottom:70px
}

.square {
  max-width: 25rem;
    left: 350px;
    padding-top: 20px;
    margin-top: 50px;
}

.login .btn-danger {
    color: #fff;
    background-color: #d6524e;
    border-color: #d6524e;
}
</style>
