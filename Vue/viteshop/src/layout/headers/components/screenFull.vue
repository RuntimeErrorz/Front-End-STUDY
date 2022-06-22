<template>
  <div @click="handleFullScreen">
    <el-icon>
      <full-screen />
    </el-icon>
  </div>
</template>

<script setup>
import { FullScreen } from "@element-plus/icons-vue";
import screenfull from "screenfull";
const handleFullScreen = () => {
  if (screenfull.isEnabled) screenfull.toggle();
};
</script>
