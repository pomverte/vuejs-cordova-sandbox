<!-- ecran de notation pour un pratiquant pour un epreuve -->
<template>
  <div class="container">
    <b-nav>
      <b-nav-item disabled><h4>{{ this.$route.params.pratiquant }} - {{ this.$route.params.epreuve }}</h4></b-nav-item>
    </b-nav>
    <b-table striped hover :items="juges" :fields="fields">
      <template slot="note" slot-scope="data">
        <b-form-input v-model="data.item.note" type="number" min="8" max="14" step="0.5"></b-form-input>
      </template>
    </b-table>
    <b-button @click="$router.go(-1)">Annuler</b-button> |
    <b-button variant="primary" v-b-tooltip.hover title="Enregistrer la note et revenir la à liste des pratiquants">Valider</b-button> |
    <b-button variant="success" v-b-tooltip.hover title="Enregistrer la note et passer au pratiquant suivant">Valider et suivant</b-button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      fields: [{ key: "nom", label: "Jury" }, "note"],
      juges: []
    };
  },
  mounted() {
    axios.get("https://fir-test-7c5ed.firebaseio.com/api/juges.json").then(
      response =>
        (this.juges = Object.keys(response.data).map(function(key) {
          return { id: key, nom: response.data[key].nom, note: "" };
        }))
    );
  }
};
</script>
