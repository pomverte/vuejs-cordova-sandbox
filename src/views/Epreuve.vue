<!-- ecran de notation d'une epreuve -->
<template>
  <div class="container">
    <b-nav>
      <b-nav-item disabled><h4>Epreuve de {{ this.$route.params.epreuve }}</h4></b-nav-item>
    </b-nav>
    <b-table striped hover :items="toArrayList(pratiquants)" :fields="fields">
      <template slot="ordre" slot-scope="row">
        {{ row.index + 1 }}
      </template>
      <template slot="action" slot-scope="row">
        <b-button @click="ratePratiquant(row.item)" variant="outline-primary">Modifier</b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
import router from "../router";
import axios from "axios";

export default {
  data() {
    return {
      fields: ["ordre", { key: "nom", label: "Pratiquant" }, "note", "action"],
      pratiquants: null
    };
  },
  methods: {
    ratePratiquant: function(pratiquant) {
      router.push({
        name: "notation",
        params: {
          epreuve: this.$route.params.epreuve,
          pratiquant: pratiquant.nom
        }
      });
    },
    toArrayList: function(object) {
      // transformation de la structure de données : object => array[object]
      var result = Object.keys(object).map(function(key) {
        return { nom: object[key].nom, note: "" };
      });
      return result;
    }
  },
  mounted() {
    axios
      .get(
        'https://fir-test-7c5ed.firebaseio.com/api/pratiquants.json?print=pretty&orderBy="grade"&equalTo="' +
          this.$route.params.gid +
          '"'
      )
      .then(response => (this.pratiquants = response.data)); // .catch(error => console.log(error));
  }
};
</script>
