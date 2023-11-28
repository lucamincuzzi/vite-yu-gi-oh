<script>
import { store } from "../store";
import axios from 'axios';
import AppArchetypeSelector from './AppArchetypeSelector.vue';
import AppCardsList from './AppCardsList.vue';

export default {
    data() {
        return {
            store,
        };
    },
    methods: {
        changeList: function() {
            axios
            .get(`${this.store.apiUrl}?archetype=${this.store.archetype}`, {
                params: {
                    num: 20,
                    offset: 0,
                }
            })
            .then((resp) => {
                this.store.cards = resp.data.data
            })
        }
    },
    components: { AppCardsList, AppArchetypeSelector }
}
</script>
<template>
    <section>
        <div class="wrapper p-4">
            <AppArchetypeSelector @archetypeChanged="changeList" />
            <AppCardsList />
        </div>
    </section>
</template>
<style lang="scss" scoped>
@use "../style/partials/variables" as *;

section {
    min-height: 1000px;
    background-color: $main-bg-color;

    .wrapper {
        padding: 100px;
    }
}
</style>