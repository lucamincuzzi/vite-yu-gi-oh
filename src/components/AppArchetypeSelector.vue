<script>
import { store } from "../store";
export default {
    data() {
        return {
            store
        }
    },
    methods: {
        archetypeChanged: function () {
            this.$emit("archetypeChanged", this.store.archetype);
        }
    }
}
</script>

<template>
    <div class="container">
        <select v-model="store.archetype" @change="archetypeChanged" class="form-select w-25 mb-4"
            aria-label="Default select example">
            <option selected>Choose an archetype</option>
            <option value="Ghostrick">Ghostrick</option>
            <option value="Madolche">Madolche</option>
            <option value="Blackwing">Blackwing</option>
        </select>
    </div>
</template>

<style lang="scss"></style>