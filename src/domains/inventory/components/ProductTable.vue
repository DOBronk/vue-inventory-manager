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
      </tr>
      <tr v-for="product in products" :key="product.id">
        <td>{{ product.name }}</td>
        <td>{{ product.actualAmount }}</td>
        <td>{{ product.minimumAmount }}</td>
      </tr>
    </tbody>
  </table>
</template>
