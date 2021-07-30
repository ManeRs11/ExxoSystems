<template>
  <div class="login">
      
        <!-- Titulos -->
        <div class="container">
            <h2>
                <strong>CONSULTORÍA INFORMÁTICA</strong>
            </h2>
        </div>
      
        <!-- Servicios -->
        <div class="container">
            <b-row style="padding-bottom: 100px; padding-top:33px">
                <b-col>
                    <img style="width: 300px;" src="./../assets/img/diseno-web.png" alt=""><br> 
                    <h4>Diseño de landing pages</h4>   
                </b-col>
                <b-col>
                    <img style="width: 300px;" src="./../assets/img/web.png" alt=""><br>
                    <h4>Sistemas complejos para tu negocio</h4> 
                </b-col>
                <b-col>
                    <img style="width: 300px;" src="./../assets/img/mobileapp.png" alt=""><br>
                    <h4>Aplicaciones moviles</h4>
                </b-col>
            </b-row>
        </div>
    
        <!-- Cultura -->
        <div class="container" style="text-align: justify;" >
            <b-row>
                <div style="text-decoration: underline #d6524e; text-underline-position: under;">
                    <h4><strong>Cultura EXXO</strong></h4> <br>
                </div>
                <p>
                    <strong>EXXO</strong> es una cultura interna que invita al progreso personal y profesional, la mejor parte de esta cultura 
                    se encuentra en nuestro equipo, ya que está en constante evolución tecnológica y motivado para encontrar soluciones innovadoras. <br><br>
                    Nuestros clientes se aseguran contar con un equipo de profesionales en constante crecimiento, y de esta manera llevando su 
                    infraestructura siempre al mejor nivel.
                </p> <br><br>

                <p>
                    <strong>EXXO</strong> Systems se concentra en áreas como: <br> <br>
                    <ul>
                        <li>Desarrollo de software a la medida</li>
                        <li>Sistemas de automatizacion de procesos</li>
                        <li>Desarrollo para Android y IOS</li>
                    </ul>
                </p>
            </b-row>
        </div>
      

        <div v-if="false" class="container" style="text-align: justify; padding: 0;padding-top: 50px;">
            <div style="text-decoration: underline #d6524e; text-underline-position: under;">
                <h4><strong>Clientes Satisfechos</strong></h4> <br>
            </div>
            <div>
                <div class="row">
                    <b-col>
                        <img style="width: 250px;" src="./../assets/clientes/finanzasZen.png" alt=""><br> 
                    </b-col>
                    <b-col>
                        <img style="width: 150px;" src="./../assets/clientes/ccima.png" alt=""><br> 
                    </b-col>
                    <b-col></b-col>
                    <b-col></b-col>
                    
                </div>
            </div>
        </div>

        <!-- Contacto -->
        <div class="container" style="text-align: justify;  padding: 0; padding-top: 100px;">
            <b-row>
                <b-col>
                    <div style="text-decoration: underline #d6524e; text-underline-position: under;">
                        <h4><strong>CONTACTO</strong></h4> <br>
                    </div>
                    <b-form inline>
                        
                        <label class="sr-only" for="inline-form-input-email">Correo</label>
                        
                        <b-input-group  class="mb-2 mr-sm-2 mb-sm-0" style="width: 100%;" v-validate="'required'" type="email" >
                            <b-form-input name="email" v-validate="'required'" type="text"  v-model="form.email" id="inline-form-input-email" placeholder="Correo *"></b-form-input>
                        </b-input-group>
                        <span v-show="errors.has('email')" class="is-invalid" style="padding-bottom: 20px;">El email es requerido *</span>
                        <br>
                        
                        <label class="sr-only" for="inline-form-input-telephone">Teléfono</label>
                        
                        <b-input-group class="mb-2 mr-sm-2 mb-sm-0" style="width: 100%;" v-validate="'required'" type="number" >
                            <b-form-input name="telephone" v-validate="'required'" type="number" v-model="form.telephone" id="inline-form-input-telephone" placeholder="Telefono *"></b-form-input>
                        </b-input-group>
                        <span v-show="errors.has('telephone')" class="is-invalid">El teléfono es requerido *</span>
                        
                        <label class="sr-only" for="inline-form-input-comment">Comentarios</label>
                        
                        <b-form-textarea class="mb-2 mr-sm-2 mb-sm-0" style="width: 100%; margin-top: 25px;"
                            name="description"
                            v-validate="'required'" type="text" 
                            id="inline-form-input-comment"
                            v-model="form.comment"
                            placeholder="Mandanos tus comentarios *"
                            rows="6"
                            max-rows="8">
                        </b-form-textarea>
                        <span v-show="errors.has('description')" class="is-invalid">El comentario es requerido *</span>
                        
                        <div style="padding-top: 333px;padding-left: 0px;position: absolute;">
                            <b-button :disabled="disabled" variant="danger" v-on:click="saveData">Enviar Comentarios</b-button>
                        </div>
                        <div style="padding-top: 20px;padding-left: 243px;">
                            <vue-recaptcha name="verifica" class="verifica"
                                ref="recaptcha"
                                @verify="onVerify()"
                                sitekey="6Lf7u8sbAAAAAL_zpcxhCDqJefjgn38l8a4iKtA_" 
                                :loadRecaptchaScript="true">
                            </vue-recaptcha>
                        </div>

                    </b-form>    
                </b-col>
                <b-col>
                    <img style="width: 350px;margin-left: 133px;margin-top: 60px;" src="./../assets/img/logo2.png" alt=""><br> 
                </b-col>
            </b-row>
        </div>

  </div>
</template>


<script>
// 
import VueRecaptcha from 'vue-recaptcha';
import firebase from 'firebase/app'
// const db = firebase.firestore()
export default {
  name: 'admin',
  data: function () {
    return {
      db: {},
      disabled: true,
      idRegister: '',
      form: {
          email: '',
          telephone: '',
          comment: ''
      }
    }
  },
  mounted () {
    this.init()
  },
  components: {
    VueRecaptcha
  },
  methods: {
    async init () {
      this.db = firebase.firestore()
    },
    async onVerify () {
        this.$validator.validateAll().then((result) => {
            if(result) {
                this.disabled = false
                return
            } else {
                this.$refs.recaptcha.reset();
            }
        })
    },
    async saveData () {
      this.db.collection('Comments').add({
        Email: this.form.email,
        Telephone: this.form.telephone,
        Comment: this.form.comment,
        DayComment: this.$moment().format('LLLL'),
      }).then((result) => {
        this.idRegister = result.id
        this.$swal({
            title: 'Enviado!',
            text: "Te responderemos en cuanto antes",
            icon: 'success',
            showCancelButton: false,
            confirmButtonColor: '#d6524e',
            confirmButtonText: 'OK'
        });
      })
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
.login .is-invalid {
    color: red;
}
</style>
