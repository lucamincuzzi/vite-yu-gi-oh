<script>
export default {
    props: {
        card: Object
    }
}
</script>

<template>
    <div class="card">
        <img :src="card.card_images.image_url" alt="">
        <h4>{{ card.name }}</h4>
    </div>
</template>