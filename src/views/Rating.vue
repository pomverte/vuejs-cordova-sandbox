<!-- ecran de notation pour un pratiquant pour un epreuve -->
<template>
  <div class="container">
    <b-nav>
      <b-nav-item disabled><h4>{{ this.$route.params.pratiquant }} - {{ this.$route.params.trial }}</h4></b-nav-item>
    </b-nav>
    <b-table striped hover :items="items" :fields="fields">
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
export default {
  data() {
    return {
      fields: [{ key: "nom", label: "Jury" }, "note"],
      items: [
        { nom: "Mika", note: "" },
        { nom: "Zazie", note: "" },
        { nom: "Jenifer", note: "" },
        { nom: "Garou", note: "" }
      ]
    };
  }
};
</script>
