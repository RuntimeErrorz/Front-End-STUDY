<template>
  <el-dialog :model-value="dialogFormVisible" :title="dialogTitle" @close="handleClose">
    <el-form ref="fromRef" :model="form" label-width="120px" :rules="rules">
      <el-form-item label="id" prop="id">
        <el-input v-model="form.id" />
      </el-form-item>
      <!-- <el-form-item label="cat" prop="goods_name">
        <el-input v-model="form.goods_cat" />
      </el-form-item> -->
      <el-form-item label="goods_name" prop="goods_name">
        <el-input v-model="form.goods_name" />
      </el-form-item>
      <el-form-item label="goods_number" prop="goods_number">
        <el-input v-model="form.goods_number" />
      </el-form-item>
      <el-form-item label="goods_price" prop="goods_price">
        <el-input v-model="form.goods_price" />
      </el-form-item>
      <el-form-item label="goods_weight" prop="goods_weight">
        <el-input v-model="form.goods_weight" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleClose">Cancel</el-button>
        <el-button type="primary" @click="handleConfirm">Confirm</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { defineEmits, ref, defineProps, watch } from "vue";
import { addGood, editGood } from "@/api/users.js";
import { ElMessage } from "element-plus";
import { useI18n } from "vue-i18n";
const i18n = useI18n();
const props = defineProps({
  dialogTitle: {
    type: String,
    default: "",
    required: true,
  },
  dialogTableValue: {
    type: Object,
    default: () => { },
  },
});
const fromRef = ref(null);
const form = ref({
  id: 1123,
  goods_name: "",
  goods_number: "",
  goods_price: "",
  goods_cat: ['1', '2', '3'],
  goods_weight: "",
});
const rules = ref({
  goods_name: [
    {
      required: true,
      message: "Please input a value",
      trigger: "blur",
    },
  ],
  goods_number: [
    {
      required: true,
      message: "Please input a value",
      trigger: "blur",
    },
  ],
  goods_price: [
    {
      required: true,
      message: "Please input a value",
      trigger: "blur",
    },
  ],
  goods_weight: [
    {
      required: true,
      message: "Please input a value",
      trigger: "blur",
    },
  ],
});
watch(
  () => props.dialogTableValue,
  () => {
    form.value = props.dialogTableValue;
  },
  { deep: true, immediate: true }
);
const emits = defineEmits(["update:modelValue", "initGetGoodsList"]);
const handleClose = () => {
  emits("update:modelValue", false);
};
const handleConfirm = async () => {
  fromRef.value.validate(async (valid) => {
    if (valid) {
      console.log(form.value.goods_cat)
      props.dialogTitle === "添加商品"
        ? await addGood(form.value)
        : await editGood(form.value);
      emits("initGetGoodsList");
      handleClose();
      ElMessage({
        message: i18n.t("message.updateSuccess"),
        type: "success",
      });
    } else {
      return false;
    }
  });
};
</script>

<style lang="scss" scoped>
</style>
