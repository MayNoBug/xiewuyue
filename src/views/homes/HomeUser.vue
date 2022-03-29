<template>
  <div>
    <el-button type="primary" class="addbtn" @click="addfn(1)">
     编辑添加，字段各种规则验证实例
    </el-button>
    <el-table :data="arrs">
      <el-table-column prop="text" label="文章标题"> </el-table-column>
      <el-table-column prop="name" label="作者"> </el-table-column>
      <el-table-column prop="a" label="浏览量"> </el-table-column>
      <el-table-column prop="b" label="回复"> </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <!-- 弹窗 -->
    <el-dialog
      :title="i == 1 ? '添加用户' : '编辑'"
      :visible.sync="dialogFormVisible"
    >
      <el-form :model="form">
        <el-form-item label="品牌名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="浮点" :label-width="formLabelWidth">
          <el-input v-model="form.text" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="备注" :label-width="formLabelWidth">
          <el-input v-model="form.text" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="机构地址" :label-width="formLabelWidth">
          <el-input v-model="form.text" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="管理员手机号" :label-width="formLabelWidth">
          <el-input v-model="form.text" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth">
          <el-input v-model="form.text" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="fntrue">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import instance from "../../api/index";
export default {
  name: "HomeUser",
  data() {
    return {
      arrs: null,
      debounceedit: null, //防抖
      debouncedelete: null,
      dialogFormVisible: false,
      form: {
        id: "0",
        name: "山治",
        text: "最终梦想隐身果实",
      },
      formLabelWidth: "120px",
      i: 0, //区分是不是添加业务还是删改业务
    };
  },
  methods: {
    addfn(i) {
      this.i = i;
      console.log(i);
      this.form.name = "";
      this.form.text = "";
      this.dialogFormVisible = !this.dialogFormVisible;
    },
    fntrues() {
      this.dialogFormVisible = false;
      if (this.i === 1) return this.handleAdd(); //添加
      this.editHomeIndex();
    },
    async handleAdd(a, b) {
      //添加业务
      let name = this.form.name;
      let text = this.form.text;
      let { data } = await instance.post("/homeindex", { name, text });
      console.log(data);
      this.getHomeIndex();
    },
    handleEdit(a, b) {
      //用户行为
      console.log(a, b);
      this.dialogFormVisible = !this.dialogFormVisible;
      this.form.name = b.name;
      this.form.text = b.text;
      this.form.id = b.id;
      this.i = 0;
    },
    handleDelete(a, b) {
      //用户行为
      console.log(a, b);
      //   this.i = i
      this.$confirm("确定删除该条信息吗", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          console.log("删除");
          this.deleteHomeIndex(a);
        })
        .catch(() => {
          console.log("取消");
        });
    },
    async getHomeIndex() {
      let { data } = await instance.get("/homeindex");
      console.log(data);
      this.arrs = data;
    },
    // 删除业务
    async deleteHomeIndex(index) {
      let { data } = await instance.delete("/homeindex/" + index);
      console.log(data);
      this.getHomeIndex();
    },
    //编辑业务
    async editHomeIndex() {
      let name = this.form.name;
      let text = this.form.text;
      let id = this.form.id;
      console.log(name, text);
      let { data } = await instance.put("/homeindex/edit/" + id, {
        name,
        text,
      });
      console.log(data);
      this.getHomeIndex();
    },
  },
  created() {
    this.getHomeIndex();
  },
};
</script>
<style scoped>
.addbtn {
  float: left;
  margin-top: 144px;
  margin-top: 40px;
}
</style>