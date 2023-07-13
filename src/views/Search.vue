<template>
  <var-pull-refresh v-model="refreshing" @refresh="refresh">
    <var-list v-model:loading="loading" @load="load">
      <var-cell :key="d" v-for="d in list">ListItem {{ d }}</var-cell>
    </var-list>
  </var-pull-refresh>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const refreshing = ref(false)
const loading = ref(false)
const list = ref<number[]>([])

function refresh() {
  setTimeout(() => {
    console.log('refresh')
    refreshing.value = false
  }, 2000)
}

function load() {
  setTimeout(() => {
    for (let i = 0; i < 20; i++) {
      list.value.push(list.value.length + 1)
    }
    loading.value = false
  }, 1000)
}
</script>

