<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<template>
    <header>
        <div class="container d-flex align-items-center gap-3">
            <img src="../assets/img/yu-gi-oh-logo.PNG"
                alt="Logo Yu-Gi-Oh!">
            <h1>Yu-Gi-Oh API</h1>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@use "../src/style/partials/mixins" as *;

header {
    padding: 10px 0;
    .container {
    img {
        width: auto;
        height: 30px;
    }
}
}
</style>