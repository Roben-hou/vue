import { defineStore } from "pinia";

export const useCounterStore = defineStore('counter', {
  actions: {
    increment(value: number) {
      console.log('increment被调用了')
      this.sum += value
    }

  },

  state() {
    return {
      sum: 0,
      name: 'nagi',
      age: 20
    }
  },
  getters: {
    sumDouble(state) {
      return state.sum * 2
    }
  },
})