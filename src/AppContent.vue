<script>
import AppCardsList from './AppCardsList.vue';

export default {
    data() {
        return {};
    },
    components: { AppCardsList }
}
</script>
<template>
<section>
    <AppCardsList />
</section>
</template>
<style lang="scss" scoped>
@use "./style/partials/variables" as *;

section {
    min-height: 1000px;
    background-color: $main-bg-color;
}
</style>