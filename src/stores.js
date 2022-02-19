import { writable } from "svelte/store";

export const FeedbackStore = writable([
    {
        id: 0,
        rating: 5,
        text: "Drone"
    },
    {
        id: 1,
        rating: 4,
        text: "Programming"
    },
    {
        id: 2,
        rating: 2,
        text: "Images"
    },
    {
        id: 3,
        rating: 2,
        text: "Placeholders"
    }
])