import { writable } from "svelte/store";

export const FeedbackStore = writable([
    {
        id: 0,
        rating: 5,
        text: "Very happy!!"
    },
    {
        id: 1,
        rating: 4,
        text: "Fairly happy"
    },
    {
        id: 2,
        rating: 2,
        text: "Not happy"
    },
    {
        id: 3,
        rating: 2,
        text: "Not happy"
    }
])