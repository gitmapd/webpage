<template>
  <div id="app">
    <h1>My Calendar App</h1>
    <Calendar />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Calendar from './components/Calendar.vue';

export default {
  name: 'App',
  components: {
    Calendar
  }
};
</script>

<style>
#app {
  font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
  padding: 24px;
}
</style>
