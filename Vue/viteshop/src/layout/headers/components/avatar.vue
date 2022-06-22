<template>
  <el-dropdown>
    <span class="el-dropdown-link">
      <el-avatar :size="50" :src="circleUrl" />
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="logout">退出</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
const store = useStore();
const circleUrl = ref(
  "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2F22%2Fae%2F1a%2Fb5%2F7837fb151797bfa43d5fa7c0dec3e9bf.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1651854500&t=1312c20d374ea021d93fe2e58b4b73ca"
);
const logout = () => {
  store.dispatch("app/logout");
};
</script>

<style lang="scss" scoped></style>
