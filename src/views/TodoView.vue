<script setup lang="ts">
import { useTodoStore } from "@/stores/counter";
import { ref } from "vue";
import { storeToRefs } from "pinia";

const todos = useTodoStore();
const { items, filter } = storeToRefs(todos);
const { addTodo, completeTodo } = todos;
const title = ref("");
</script>

<template>
  <div class="about">
    <h1>Todo Example</h1>

    <form action="" @submit.prevent="addTodo(title)">
      <div>
        <input type="text" placeholder="" name="title" v-model="title" />
        <button>Add todo</button>
      </div>
      <div>
        Filter by {{ filter }}
        <select v-model="filter">
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="completed">Completed</option>
        </select>
      </div>
    </form>

    <ul class="todo-list">
      <li v-for="item in items" v-bind:key="item.id">
        <input
          type="checkbox"
          @change="completeTodo(item.id)"
          :checked="item.completed"
        />
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .counter {
    color: #fff;
  }
}
</style>
