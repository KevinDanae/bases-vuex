<template>
  <h1>Counter en Vuex</h1>
  <h2>Acceso directo: {{ $store.state.count }}</h2>
  <h2>Computed: {{ countComputed }}</h2>
  <h1>MapState</h1>
  <h2>MapState: {{ counter }}</h2>
  <h2>{{ mutation }}</h2>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    countComputed() {
      return this.$store.state.count;
    },
    ...mapState({
      counter: (state) => state.count,
      mutation: (state) => state.lastMutation,
    }),
  },
};
</script>

<style></style>
