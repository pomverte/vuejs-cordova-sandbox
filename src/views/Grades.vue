<template>
  <div class="container">
    <b-card-group columns>
      <!-- https://github.com/vuejs/vetur/issues/261#issuecomment-429217527 -->
      <b-card v-for="it in grades" :key="it"
              v-bind:title="it.label"
              style="max-width: 20rem;"
              v-bind:img-src="it.image"
              img-alt="Image"
              img-top>
        <b-list-group flush>
          <b-list-group-item v-for="it in it.epreuves" :key="it">
            <router-link :to="{ name: 'epreuve', params: { epreuve: it }}">{{ it }}</router-link>
          </b-list-group-item>
        </b-list-group>
        <b-card-footer>Nombre de pratiquants : {{ it.nbPratiquant }}</b-card-footer>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      grades: [
        {
          label: "Ceinture Bleue 00",
          epreuves: [
            "Techniques de base",
            "Clés",
            "Chiem Luoc",
            "Contre-attaques",
            "Don Chan",
            "Roulades",
            "Pompes"
          ],
          nbPratiquant: 30,
          image: "https://picsum.photos/600/300/?image=25"
        },
        {
          label: "Ceinture Bleue 01",
          epreuves: [
            "Techniques de base",
            "Clés",
            "Chiem Luoc",
            "Contre-attaques",
            "Khai Mon Quyen",
            "Son Luyen Mot",
            "Don Chan",
            "Roulades",
            "Pompes"
          ],
          nbPratiquant: 20,
          image: "https://picsum.photos/600/300/?image=27"
        },
        {
          label: "Ceinture Bleue 02",
          epreuves: [
            "Techniques de base",
            "Clés",
            "Chiem Luoc",
            "Contre-attaques",
            "Thap Thu Quyen",
            "Son Luyen Vat Mot",
            "Don Chan",
            "Roulades",
            "Pompes"
          ],
          nbPratiquant: 15,
          image: "https://picsum.photos/600/300/?image=28"
        }
      ]
    };
  }
};
</script>
