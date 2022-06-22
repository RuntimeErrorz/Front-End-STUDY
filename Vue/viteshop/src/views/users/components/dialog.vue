<template>
  <el-dialog
    :model-value="dialogFormVisible"
    :title="dialogTitle"
    @close="handleClose"
  >
    <el-form ref="fromRef" :model="form" label-width="120px" :rules="rules">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="form.username" />
      </el-form-item>
      <el-form-item
        label="密码"
        prop="password"
        v-if="dialogTitle === '添加用户'"
      >
        <el-input v-model="form.password" />
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="form.email" />
      </el-form-item>
      <el-form-item label="电话" prop="mobile">
        <el-input v-model="form.mobile" />
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
import { addUser, editUser } from "@/api/users.js";
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
    default: () => {},
  },
});
const fromRef = ref(null);
const form = ref({
  username: "",
  password: "",
  email: "",
  mobile: "",
});
const rules = ref({
  username: [
    {
      required: true,
      message: "Please select activity resource",
      trigger: "blur",
    },
  ],
  password: [
    {
      required: true,
      message: "Please select activity resource",
      trigger: "blur",
    },
  ],
  email: [
    {
      required: true,
      type: "email",
      message: "请输入正确格式的邮箱",
      trigger: ["blur", "change"],
    },
  ],
  mobile: [
    {
      required: true,
      message: "Please select activity resource",
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
const emits = defineEmits(["update:modelValue", "initGetUsersList"]);
const handleClose = () => {
  emits("update:modelValue", false);
};
const handleConfirm = async () => {
  fromRef.value.validate(async (valid) => {
    if (valid) {
      props.dialogTitle === "添加用户"
        ? await addUser(form.value)
        : await editUser(form.value);
      emits("initGetUsersList");
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

<style lang="scss" scoped></style>
