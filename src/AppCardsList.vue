<script>
import AppCard from './AppCard.vue';
import { store } from './store'
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
        <div class="row">
            <div v-for="card in store.cards" class="col">
                <AppCard :card="card" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>