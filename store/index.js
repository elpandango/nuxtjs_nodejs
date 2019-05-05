import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedProducts: [],
      singleProduct: {}
    },
    mutations: {
      setProducts(state, products) {
        state.loadedProducts = products;
      },
      setSingleProduct(state, product) {
        state.singleProduct = product;
      }
    },
    actions: {
      // nuxtServerInit(vuexContext, context) {
      //   return context.app.$axios
      //     .$get("http://localhost:9000/products")
      //     .then(data => {
      //       const postsArray = [];
      //       for (const key in data) {
      //         postsArray.push({ ...data[key] });
      //       }
      //       vuexContext.commit("setProducts", postsArray);
      //     })
      //     .catch(e => context.error(e));
      // },
      setProducts(vuexContext, products) {
        vuexContext.commit("setProducts", products);
      },
      setSingleProduct(vuexContext, product) {
        vuexContext.commit("setSingleProduct", product);
      },
    },
    getters: {
      loadedProducts(state) {
        return state.loadedProducts;
      },
      loadedSingleProduct(state) {
        return state.loadedSingleProduct;
      },
    }
  });
};

export default createStore;
