<script setup>
const product = defineModel();
alert(product.value.minimumAmount);
</script>

<template>
  <table>
    <tbody>
      <tr>
        <th>
          Product
        </th>
        <th>
          Voorraad
        </th>
        <th>
          Minimum voorraad
        </th>
      </tr>
      <tr>
        <td>
          <input v-model="product.name" />
        </td>
        <td>
          <input v-model="product.actualAmount"  />
        </td>
        <td>
         <input v-model="product.minimumAmount" />
        </td>
      </tr>
    </tbody>
  </table>
</template>
