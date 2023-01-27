<script setup>
import {ref} from "vue";

const data = ref("hello")
</script>

<template>
  {{ data }}

  <input type="text" v-model="data">
</template>