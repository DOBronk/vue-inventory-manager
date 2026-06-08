<script setup>
import ProductForm from "@/domains/inventory/components/ProductForm.vue"
import { addProduct, generateId } from "@/domains/inventory/store.js";
import {useRouter} from "vue-router";

const router = useRouter();

let product = {
  id: 0, // Generate ID on add product
  name: '',
  actualAmount: 0,
  minimumAmount: 0
};

function add() {
  product.id = generateId();
  addProduct(product);
  router.push({ name: 'home'});
}

function cancel() {
  router.push({ name: 'home' });
}
</script>

<template>
  <ProductForm v-model="product" /><br>
  <div>
    <button @click="add">Toevoegen</button>
    <button @click="cancel">Annuleren</button>
  </div>
</template>
