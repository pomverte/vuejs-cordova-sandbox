<template>
  <div class="container">
    <b-card-group columns>
      <!-- https://github.com/vuejs/vetur/issues/261#issuecomment-429217527 -->
      <b-card v-for="(grade, gradeKey) in grades" :key="gradeKey"
              v-bind:title="grade.nom"
              style="max-width: 20rem;"
              v-bind:img-src="grade.image"
              img-alt="Image"
              img-top>
        <b-list-group flush>
          <b-list-group-item v-for="(epreuve, epreuveKey) in grade.epreuves" :key="epreuveKey">
            <router-link :to="{ name: 'epreuve', params: { gid: gradeKey, epreuve: epreuveKey }}">{{ epreuve.nom }}</router-link>
          </b-list-group-item>
        </b-list-group>
        <b-card-footer>Nombre d'inscrits : {{ nombreInscrition(grade) }}</b-card-footer>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      grades: null
    };
  },
  methods: {
    nombreInscrition: function(grade) {
      return Object.keys(grade.pratiquants).length;
    }
  },
  mounted() {
    axios
      .get("https://fir-test-7c5ed.firebaseio.com/api/grades.json")
      .then(response => (this.grades = response.data));
  }
};
</script>
