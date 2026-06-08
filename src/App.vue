<script setup>
</script>

<template>
  <RouterLink to="/">Home</RouterLink><br>
  <RouterLink to="/products/create">Product toevoegen</RouterLink><br>
  <RouterLink :to="{ name: 'orderList' }">Bestellijst</RouterLink>
  <main style="margin-top: 20px">
    <RouterView />
  </main>
</template>
