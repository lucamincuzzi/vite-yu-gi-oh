<script>
import axios from "axios";
import { store } from "../store";
import AppHeader from '../components/AppHeader.vue';
import AppContent from "../components/AppContent.vue";

export default {
    data() {
        return {
          store
        };
    },
    created() {
      axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0").then((resp) => {
        this.store.cards = resp.data.data
        console.log(resp.data.data);
        console.log(resp.data.data[0].card_images[0].image_url);
      })
    },
    components: { AppHeader, AppContent }
}
</script>

<template>
  <AppHeader />
  <AppContent />
</template>

<style lang="scss">
@use "../src/style/general.scss";
</style>
