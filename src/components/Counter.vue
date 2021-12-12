<template>
  <h1>Counter en Vuex</h1>
  <h2>Acceso directo: {{ $store.state.counter.count }}</h2>
  <h2>Computed: {{ countComputed }}</h2>

  <button @click="increment">+1</button>
  <button @click="incrementBy">+5</button>
  <button @click="incrementRandomInt" :disabled="isLoading">random</button>

  <h1>MapState</h1>
  <h2>MapState: {{ counter }}</h2>
  <h2>{{ mutation }}</h2>

  <h2>Direc Getter: {{ squareCount }}</h2>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  computed: {
    countComputed() {
      return this.$store.state.counter.count;
    },
    ...mapState({
      counter: (state) => state.counter.count,
      mutation: (state) => state.counter.lastMutation,
      isLoading: (state) => state.counter.isLoading,
    }),
    ...mapGetters("counter", {
      squareCount: "squareCount",
    }),
  },
  methods: {
    increment() {
      this.$store.commit("counter/increment");
    },
    incrementBy() {
      this.$store.commit("counter/incrementBy", 5);
    },
    ...mapActions("counter", ["incrementRandomInt"]),
  },
};
</script>

<style></style>
