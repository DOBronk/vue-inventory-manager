<script setup>
import ProductForm from "@/domains/inventory/components/ProductForm.vue"
import { generateId } from "@/domains/inventory/store.js";
import {reactive} from "vue";

let product = {
  id: 0, // Generate ID on add product
  name: '',
  actualAmount: 0,
  minimumAmount: 0
};

function addProduct() {
  product.id = generateId();
}
</script>

<template>
  <ProductForm v-model="product" />
</template>
