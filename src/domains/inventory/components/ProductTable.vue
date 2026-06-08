<script setup>
import { getAllProducts } from "@/domains/inventory/store.js";
const products = getAllProducts;
</script>

<template>
  <table>
    <tbody>
      <tr>
        <th>
          Artikel
        </th>
        <th>
          Voorraad
        </th>
        <th>
          Minimum voorraad
        </th>
        <th>
          Actie
        </th>
      </tr>
      <tr v-for="product in products" :key="product.id">
        <td>{{ product.name }}</td>
        <td>{{ product.actualAmount }}</td>
        <td>{{ product.minimumAmount }}</td>
        <td> <RouterLink :to="{name: 'editProduct', params: { id: product.id }}">Bewerken</RouterLink></td>
      </tr>
    </tbody>
  </table>
</template>
