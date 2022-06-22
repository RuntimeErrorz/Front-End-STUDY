<template>
  <div class="hamburger-container" @click="toggleClick">
    test<component :is="icon"></component>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
//import { ref } from 'vue';
import { computed } from "vue";
const store = useStore();

const toggleClick = () => {
  store.commit("app/changeSiderType");
};

const icon = computed(() => {
  return !store.getters.siderType ? "expand" : "fold";
});
</script>

<style lang="scss" scoped>
.hamburger-container {
  margin-right: 16px;
  box-sizing: border-box;
  cursor: pointer;
}
</style>
