<template>
  <div class="container">
    <div class="row justify-content-md-center">
      <b-alert :variant="statut"
              dismissible
              :show="showAlert"
              @dismissed="showAlert=false">
        {{ message }}
      </b-alert>
      <b-card title="Connexion"
              style="max-width: 20rem;"
              img-src="https://picsum.photos/600/300/?image=2"
              img-alt="Image"
              img-top>
        <b-form @submit.prevent="handleSubmit">
          <p class="card-text">
            <b-form-input v-model="email" type="text" placeholder="Email"></b-form-input>
            <b-form-input v-model="password" type="password" placeholder="Password"></b-form-input>
          </p>
          <b-button type="submit" variant="success">Valider</b-button>
        </b-form>
      </b-card>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      email: "",
      password: "",
      showAlert: false,
      message: "",
      statut: ""
    };
  },
  methods: {
    handleSubmit: function() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            console.log("user : " + user)
            this.message = "Authentification réussie !";
            this.showAlert = true;
            this.statut = "success";
          },
          err => {
            this.message = "Oops. " + err.message;
            this.showAlert = true;
            this.statut = "warning";
          }
        );
    }
  }
};
</script>
