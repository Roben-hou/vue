import { defineStore } from "pinia";

export const useTalkstore = defineStore('talk', {
    state() {
        return {
            countryList: JSON.parse(localStorage.getItem('talkStore') || '[]'),
        }
    }
})