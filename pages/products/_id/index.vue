<template>
  <div class="single-post-page">
    <h1>Single Product</h1>
    <section class="product">
      <h1 class="post-title">{{ loadedData.title }}</h1>
      <div class="post-details">
        <!--<div class="post-detail">Last updated on {{ loadedData.updatedDate | date }}</div>-->
        <!--<div class="post-detail">Written by {{ loadedData.author }}</div>-->
      </div>
      <p class="post-content">{{ loadedData.reviewDescription }}</p>
    </section>

  </div>
</template>

<script>
  export default {
    asyncData(context) {
//      console.log(context.app);

      return context.app.$axios.$get('http://localhost:9000/products/' + context.params.id)
        .then(response => {
          return {
            loadedData: response
          }
        })
        .catch(e => context.error(e))
    },
    head: {
      title: 'A Blog Post'
    }
  };
</script>

<style scoped>
  .single-post-page {
    padding: 30px;
    text-align: center;
    box-sizing: border-box;
  }

  .post {
    width: 100%;
  }

  @media (min-width: 768px) {
    .post {
      width: 600px;
      margin: auto;
    }
  }

  .post-title {
    margin: 0;
  }

  .post-details {
    padding: 10px;
    box-sizing: border-box;
    border-bottom: 3px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  @media (min-width: 768px) {
    .post-details {
      flex-direction: row;
    }
  }

  .post-detail {
    color: rgb(88, 88, 88);
    margin: 0 10px;
  }

  .post-feedback a {
    color: red;
    text-decoration: none;
  }

  .post-feedback a:hover,
  .post-feedback a:active {
    color: salmon;
  }
</style>
