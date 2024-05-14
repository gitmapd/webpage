<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main >
    <TheWelcome />
    <Parallaxy :speed="20" :animation="(delta) => `transform: translate3d(0, ${delta}px, 0);`">
		<img src="https://picsum.photos/400">
	</Parallaxy>
  </main>
</template>
