import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);
  const doubleCount = computed(() => count.value * 2);
  const color = computed(() =>
    count.value < 0 ? "red" : count.value > 0 ? "green" : "black"
  );

  function increment() {
    count.value++;
  }

  return { count, color, doubleCount, increment };
});

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

type Filter = "all" | "active" | "completed";

export const useTodoStore = defineStore("todos", () => {
  const data = ref<Todo[]>([]);
  const filter = ref<Filter>("all");
  const nextId = ref(0);

  const completedTodos = computed(() =>
    data.value.filter((item) => item.completed)
  );

  const activeTodos = computed(() =>
    data.value.filter((item) => !item.completed)
  );

  const items = computed(() =>
    filter.value === "completed"
      ? completedTodos.value
      : filter.value === "active"
      ? activeTodos.value
      : data.value
  );

  const addTodo = (title: Todo["title"]) => {
    items.value.push({ id: nextId.value++, title, completed: false });
  };

  const completeTodo = (id: Todo["id"]) => {
    const item = items.value.find((item) => item.id == id);

    if (item) item.completed = !item.completed;
  };

  return { items, filter, addTodo, completeTodo };
});
