<template>
  <el-dropdown @command="handleCommand">
    <el-icon>
      <calendar />
    </el-icon>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="zh" :disabled="currentLanguage === 'zh'"
          >中文</el-dropdown-item
        >
        <el-dropdown-item command="en" :disabled="currentLanguage === 'en'"
          >English</el-dropdown-item
        >
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { useStore } from "vuex";
import { computed } from "vue";
const i18n = useI18n();
const store = useStore();
const handleCommand = (value) => {
  i18n.locale.value = value;
  store.commit("app/changeLang", value);
  localStorage.setItem("lang", value);
};
const currentLanguage = computed(() => {
  return i18n.locale.value;
});
</script>
