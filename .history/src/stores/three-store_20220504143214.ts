import { defineStore } from 'pinia';

export const useThreeStore = defineStore({
  id: 'ThreeStore',
  state: () => ({
    counter: 0
  }),
  getters: {
    doubleCount: (state) => state.counter * 2
  },
  actions: {
    increment() {
      this.counter++;
    }
  }
});
