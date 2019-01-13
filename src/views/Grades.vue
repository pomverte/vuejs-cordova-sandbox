<template>
  <div class="container">
    <b-card-group columns>
      <!-- https://github.com/vuejs/vetur/issues/261#issuecomment-429217527 -->
      <b-card v-for="grade in grades" :key="grade"
              v-bind:title="grade.label"
              style="max-width: 20rem;"
              v-bind:img-src="grade.image"
              img-alt="Image"
              img-top>
        <b-list-group flush>
          <b-list-group-item v-for="it in grade.epreuves" :key="it">
            <router-link :to="{ name: 'epreuve', params: { gid: grade.id, epreuve: it }}">{{ it }}</router-link>
          </b-list-group-item>
        </b-list-group>
        <b-card-footer>Nombre de pratiquants : {{ grade.nbPratiquant }}</b-card-footer>
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
          id: "cb00",
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
          id: "cb01",
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
          id: "cb02",
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
