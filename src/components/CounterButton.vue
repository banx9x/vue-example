<!-- CounterButton.vue -->

<script setup lang="ts">
// import anything
import { ref, computed, onMounted } from "vue";

// state, computed value
const count = ref(0);
const color = computed(() => (count.value >= 0 ? "green" : "red"));
const fontSize = computed(() => count.value * 10 + "px");

// actions
const increment = () => count.value++;

// life cycle hooks
onMounted(() => {
  console.log("Initial count is:", count.value);
});
</script>

<template>
  <button @click="count--">-</button>
  <span>Count is {{ count }}</span>
  <button @click="increment">+</button>
</template>

<style scoped>
button {
  background-color: v-bind(color);
}
span {
  font-size: v-bind(fontSize);
}
</style>
