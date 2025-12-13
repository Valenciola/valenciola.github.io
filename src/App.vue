<template>
  <router-view />
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import Navbar from './components/Navbar.vue'

const route = useRoute()
const showNavbar = computed(() => route.path !== '/')
</script>