<template>
<div>
  <el-row>
  <el-button>随便写点东西</el-button>
  <el-button type="primary">随便写点东西</el-button>
  <el-button type="success">随便写点东西</el-button>
  <el-button type="info">随便写点东西</el-button>
  <el-button type="warning">随便写点东西</el-button>
  <el-button type="danger">随便写点东西</el-button>
</el-row>

<el-row>
  <el-button plain>朴素按钮</el-button>
  <el-button type="primary" plain>主要按钮</el-button>
  <el-button type="success" plain>成功按钮</el-button>
  <el-button type="info" plain>信息按钮</el-button>
  <el-button type="warning" plain>警告按钮</el-button>
  <el-button type="danger" plain>危险按钮</el-button>
</el-row>
</div>
</template>
<script>
// import instance from "../../api/index";
export default {
  name: "MyText"
};
</script>
<style scoped>
.addbtn {
  float: right;
  margin-top: 144px;
  margin-top: 40px;
}
</style>