<!-- ecran de notation d'une epreuve -->
<template>
  <div class="container">
    <b-nav>
      <b-nav-item disabled><h4>Epreuve de {{ trial }}</h4></b-nav-item>
    </b-nav>
    <b-table striped hover :items="items" :fields="fields">
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

export default {
  props: ["trial"],
  data() {
    return {
      fields: ["ordre", { key: "nom", label: "Pratiquant" }, "note", "action"],
      items: [
        { nom: "Leonard Leakey Hofstadter", note: "10" },
        { nom: "Sheldon Cooper", note: "11" },
        { nom: "Penny", note: "14" },
        { nom: "Howard Wolowitz", note: "12" },
        { nom: "Raj Koothrappali", note: "10" },
        { nom: "Leslie Winkle", note: "11" },
        { nom: "Bernadette Rostenkowski-Wolowitz", note: "13" },
        { nom: "Amy Farrah Fowler", note: "" },
        { nom: "Stuart Bloom", note: "" },
        { nom: "Emily Sweeney", note: "" }
      ]
    };
  },
  methods: {
    ratePratiquant: function(pratiquant) {
      router.push({
        name: "rating",
        params: { trial: this.trial, pratiquant: pratiquant.nom }
      });
    }
  }
};
</script>
