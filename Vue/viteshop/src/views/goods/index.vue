<template>
  <el-card>
    <el-row :gutter="20">
      <el-col :span="7">
        <el-input :placeholder="$t('table.placeholder')" v-model="queryForm.query" clearable></el-input>
      </el-col>
      <el-button type="primary" :icon="Search" @click="initGetGoodsList">{{
          $t("table.search")
      }}</el-button>
      <el-button type="primary" @click="handleDialogValue()">{{
          "添加商品"
      }}</el-button>
    </el-row>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column :prop="item.prop" :label="item.label" v-for="(item, index) in options" :key="index"
        :width="item.width">
        <template v-slot="{ row }" v-if="item.prop === 'add_time'">{{
            $filters.filterTimes(row.add_time)
        }}</template>
        <template #default="{ row }" v-else-if="item.prop === 'action'">
          <el-button type="primary" size="small" :icon="Edit" @click="handleDialogValue(row)"></el-button>
          <el-button type="danger" size="small" :icon="Delete" @click="delGood(row)"></el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination v-model:currentPage="queryForm.pagenum" :page-size="queryForm.pagesize" :page-sizes="[2, 5, 10, 15]"
      layout="total, sizes, prev, pager, next, jumper" :total="total" @size-change="handleSizeChange"
      @current-change="handleCurrentChange" />
  </el-card>
  <Dialog v-model="dialogFormVisible" :dialogTitle="dialogTitle" v-if="dialogFormVisible"
    :dialogTableValue="dialogTableValue" @initGetGoodsList="initGetGoodsList" />
</template>

<script setup>
import { Edit, Delete } from "@element-plus/icons-vue";
import { getGoods } from "@/api/users.js";
import { ref } from "vue";
import { options } from "./options.js";
import { useI18n } from "vue-i18n";
import { ElMessage } from "element-plus";
import Dialog from "./components/dialog.vue";
import { isNull } from "../../utils/filters.js";

import { deleteGood } from "../../api/users.js";
const total = ref(0);
const dialogTitle = ref("");
const dialogFormVisible = ref(false);
const dialogTableValue = ref({});
const i18n = useI18n();
const tableData = ref([]);

const queryForm = ref({
  query: "",
  pagenum: 1,
  pagesize: 22,
});
const handleDialogValue = (row) => {
  if (isNull(row)) {
    dialogTitle.value = "添加商品";
    dialogTableValue.value = {};
  } else {
    dialogTitle.value = "编辑商品";
    dialogTableValue.value = JSON.parse(JSON.stringify(row));
  }
  dialogFormVisible.value = true;
};
const delGood = async (row) => {
  await deleteGood(row);
  ElMessage({
    message: i18n.t("message.updateSuccess"),
    type: "success",
  });
  initGetGoodsList();
};
const handleSizeChange = (pageSize) => {
  queryForm.value.pagenum = 1;
  queryForm.value.pagesize = pageSize;
  initGetGoodsList();
};
const handleCurrentChange = (pagenum) => {
  queryForm.value.pagenum = pagenum;
  initGetGoodsList();
};

const initGetGoodsList = async () => {
  const res = await getGoods(queryForm.value);
  tableData.value = res.goods;
  total.value = res.total;
};
initGetGoodsList();
</script>
<style lang="scss" scoped>
</style>
