<script>
import AppCard from './AppCard.vue';
import { store } from '../store'
export default {
    data() {
        return {
            store,
        };
    },
    components: { AppCard }
}
</script>

<template>
    <div class="container">
        <h4>
            Found {{ store.cards.length }} cards
        </h4>
        <div class="row gy-3">
            <div v-for="card in store.cards" class="col">
                <AppCard :card="card" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    padding: 30px;
    background-color: white;

    h4 {
        background-color: black;
        color: white;
        margin-bottom: 0px;
        padding: 20px;
    }

    .col {
    width: calc(100% / 5) !important;
}
}

</style>