<script setup>
import { ref } from "vue";
import { getTask } from "../requests/test";

const data = ref("hello")

console.log(await getTask());
</script>

<template>
  {{ data }}
</template>