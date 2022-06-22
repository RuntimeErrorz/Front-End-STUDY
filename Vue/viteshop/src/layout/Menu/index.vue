<template>
  <el-menu active-text-color="#ffd04b" :background-color="variables.menuBg" class="el-menu-vertical-demo"
    text-color="#fff" router unique-opened :collapse="!$store.getters.siderType">
    <el-sub-menu :index="item.id" v-for="(item, index) in menusList" :key="item.id">
      <template #title>
        <el-icon>
          <component :is="iconList[index]"></component>
        </el-icon>
        <span>{{ item.authName }}</span>
      </template>
      <el-menu-item :index="'/' + it.path" v-for="it in item.children" :key="it.id">
        <el-icon>
          <component :is="icon"></component>
        </el-icon>
        {{ $t(`menus.${it.path}`) }}
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script setup>
import { menuList } from "@/api/menu.js";
import { ref } from "vue";
import {variables} from '@/styles/variables.js'

const iconList = ref(["user", "setting", "shop", "tickets", "PieChart"]);
const icon = ref("menu");
const menusList = ref([]);
const initMenusList = async () => {
  menusList.value = await menuList();
};

initMenusList();
</script>
<style lang="scss" scoped>

</style>
