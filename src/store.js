import { reactive } from 'vue'

export const store = reactive({
    cards: [],
    apiUrl: "https://db.ygoprodeck.com/api/v7/cardinfo.php",
    archetype: "",
})