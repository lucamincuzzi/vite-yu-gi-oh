<script>
import axios from "axios";
import { store } from "./store";
import AppHeader from './AppHeader.vue';
import AppContent from "./AppContent.vue";

export default {
    data() {
        return {
          store
        };
    },
    created() {
      axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0").then((resp) => {
        this.store.cards = resp.data
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
