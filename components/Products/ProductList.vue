<template>
  <section class="product-list">
    <carousel :items="3" :dots="false" :margin="40">
      <ProductPreview
        v-for="product in products"
        :key="product.id"
        :id="product.id"
        :imageUrl="product.imageUrl"
        :title="product.title"
        :rating="product.rating" />
    </carousel>

  </section>
</template>

<script>
  import ProductPreview from '~/components/Products/ProductPreview';

  export default {
    components: {
      ProductPreview,
    },
    props: {
      products: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style scoped>
  .post-list {
    display: flex;
    padding: 20px;
    box-sizing: border-box;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
</style>
