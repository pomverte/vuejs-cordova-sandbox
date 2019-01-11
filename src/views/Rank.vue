<template>
  <div class="container">
    <b-card-group columns>
      <!-- https://github.com/vuejs/vetur/issues/261#issuecomment-429217527 -->
      <b-card v-for="item in items" :key="item"
              v-bind:title="item.rank"
              style="max-width: 20rem;"
              v-bind:img-src="item.picture"
              img-alt="Image"
              img-top>
        <b-list-group flush>
          <b-list-group-item v-for="it in item.trials" :key="it">
            <router-link :to="{ name: 'trial', params: { trial: it }}">{{ it }}</router-link>
          </b-list-group-item>
        </b-list-group>
        <b-card-footer>Nombre de pratiquants : {{ item.nbPratiquant }}</b-card-footer>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          rank: "Ceinture Bleue 00",
          trials: [
            "Techniques de base",
            "Clés",
            "Chiem Luoc",
            "Contre-attaques",
            "Don Chan",
            "Roulades",
            "Pompes"
          ],
          nbPratiquant: 30,
          picture: "https://picsum.photos/600/300/?image=25"
        },
        {
          rank: "Ceinture Bleue 01",
          trials: [
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
          picture: "https://picsum.photos/600/300/?image=27"
        },
        {
          rank: "Ceinture Bleue 02",
          trials: [
            "Techniques de base",
            "Clés",
            "Chiem Luoc",
            "Contre-attaques",
            "Thap Thu Quyen",
            "Son Vat Mot",
            "Don Chan",
            "Roulades",
            "Pompes"
          ],
          nbPratiquant: 15,
          picture: "https://picsum.photos/600/300/?image=28"
        }
      ]
    };
  }
};
</script>
