<script>
import AppArchetypeSelector from './AppArchetypeSelector.vue';
import AppCardsList from './AppCardsList.vue';

export default {
    data() {
        return {};
    },
    components: { AppCardsList, AppArchetypeSelector }
}
</script>
<template>
    <section>
        <div class="wrapper p-4">
            <AppArchetypeSelector />
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