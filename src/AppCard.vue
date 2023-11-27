<script>
export default {
    props: {
        card: Object
    }
}
</script>

<template>
    <div class="card">
        <img :src="card.card_images[0].image_url" alt="">
        <div class="card-info d-flex flex-column p-4">
            <div class="card-name">
                <h4>{{ card.name.toUpperCase() }}</h4>
            </div>
            <div class="card-archetype">{{ card.archetype }}</div>
        </div>


    </div>
</template>

<style lang="scss" scoped>
@use "./style/partials/variables" as *;

.card {
    background-color: $main-bg-color;
    color: white;
    height: 460px;

    .card-info {
        h4 {
            font-size: 1rem;
            font-weight: bold;
        }

        .card-archetype {
            color: black;
            text-align: center;
        }
    }
}
</style>