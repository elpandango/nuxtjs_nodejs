<template>
  <div class="home-page">
    <h1>Online games</h1>
    <ProductList :products="loadedProducts"></ProductList>
  </div>
</template>

<script>

  import ProductList from '@/components/Products/ProductList';

  export default {
    components: {
      ProductList
    },
    asyncData(context) {

      return context.app.$axios.$get('http://localhost:9000/products/')
        .then(response => {
          return {
            loadedProducts: response
          }
        })
        .catch(e => context.error(e))
    },
    methods: {},
    computed: {}
  }
</script>

<style scoped>

  .intro {
    height: 300px;
    position: relative;
    padding: 30px;
    box-sizing: border-box;
    background-image: url('~assets/images/main-page-background.jpg');
    background-position: center;
    background-size: cover;
  }

  .intro h1 {
    position: absolute;
    top: 10%;
    left: 5%;
    width: 90%;
    font-size: 1.5rem;
    color: #000000;
    background-color: rgb(211, 211, 211);
    padding: 10px;
    border-radius: 10px;
    box-shadow: 3px 3px 3px black;
    box-sizing: border-box;
    border: 1px solid black;
  }

  @media (min-width: 768px) {
    .intro h1 {
      font-size: 2rem;
    }
  }


</style>
