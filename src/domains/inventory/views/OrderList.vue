<script setup>
import { getProductOrderList } from "@/domains/inventory/store.js";
const products = getProductOrderList.value;
</script>

<template>
  <h1>Bestel overzicht</h1>
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
    </tr>
    <tr v-for="product in products" :key="product.id">
      <td>{{ product.name }}</td>
      <td>{{ product.actualAmount }}</td>
      <td>{{ product.minimumAmount }}</td>
    </tr>
    </tbody>
  </table>
</template>
