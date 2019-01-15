<template>
  <div class="container">
    <b-card-group columns>
      <!-- https://github.com/vuejs/vetur/issues/261#issuecomment-429217527 -->
      <b-card v-for="(value, key) in grades" :key="value"
              v-bind:title="value.nom"
              style="max-width: 20rem;"
              v-bind:img-src="value.image"
              img-alt="Image"
              img-top>
        <b-list-group flush>
          <b-list-group-item v-for="epreuve in value.epreuves" :key="epreuve">
            <router-link :to="{ name: 'epreuve', params: { gid: key, epreuve: zadaz }}">{{ epreuve.nom }}</router-link>
          </b-list-group-item>
        </b-list-group>
        <b-card-footer>Nombre de pratiquants : {{ Object.keys(value.pratiquants).length }}</b-card-footer>
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
  mounted() {
    axios
      .get("https://fir-test-7c5ed.firebaseio.com/api/grades.json")
      .then(response => (this.grades = response.data));
  }
};
</script>
