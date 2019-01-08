<!-- ecran de notation d'une epreuve -->
<template>
  <div class="container">
    <b-table striped hover :items="items" :fields="fields">
      <template slot="ordre" slot-scope="row">
        {{ row.index }}
      </template>
      <template slot="action" slot-scope="row">
        <b-button @click="ratePratiquant(row.item)" variant="outline-primary">Modifier</b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: ["ordre", "nom", "note", "action"],
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
      alert("TODO Evaluer " + pratiquant.nom);
    }
  }
};
</script>
