<script setup>
import ProductForm from "@/domains/inventory/components/ProductForm.vue";
import { getProductById, editProduct } from "@/domains/inventory/store.js";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();
const product = getProductById(Number(route.params.id.valueOf()));


let changedProduct = { id: product.id, price: product.price, name: product.name, actualAmount: product.actualAmount, minimumAmount: product.minimumAmount };

function edit(){
  editProduct(changedProduct);
  router.push({ name: 'home' });
}
function cancel() {
  router.push({ name: 'home' });
}
</script>

<template>
  <ProductForm v-model="changedProduct" />
  <div>
    <button @click="edit">Aanpassen</button>
    <button @click="cancel">Annuleren</button>
  </div>
</template>
