<template>
  <div>
    <el-table :data="data">
      <el-table-column
          prop="id"
          label="id"
          width="">
      </el-table-column>
      <el-table-column
          prop="name"
          label="姓名">
      </el-table-column>
      <el-table-column
          prop="sex"
          label="性别"
      >
        <template v-slot="scope">
          {{ scope.row.sex ? "男" : "女" }}
        </template>
      </el-table-column>
      <el-table-column
          prop="birth"
          label="出生日期">
      </el-table-column>
      <el-table-column
          label="操作">
        <template v-slot="scope">
          <span><el-button type="text" style="margin-right: 5px"
                           @click="editId=scope.row.id;editName=scope.row.name;editSex=scope.row.sex;date=scope.row.birth;edit=true;">编辑</el-button></span>
          <el-button type="text" @click="isDelete=true;deleteId=scope.row.id">删除</el-button>
        </template>
      </el-table-column>

    </el-table>
    <el-divider></el-divider>
    <el-pagination
        @current-change="changePage"
        background
        layout="prev, pager, next"
        :total="count">
    </el-pagination>
    <el-dialog :visible.sync="isDelete" title="警告">
      <h1 style="margin-bottom: 20px">你确定要删除吗</h1>
      <div>
        <el-button type="danger" @click="deleteCustomer(deleteId)">确定</el-button>
        <el-button @click="deleteId=undefined;isDelete=false">取消</el-button>
      </div>
    </el-dialog>
    <el-dialog :visible.sync="edit" title="编辑">
      <el-form>
        <el-form-item label="姓名">
          <el-input v-model="editName"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-select v-model="editSex">
            <el-option :value="true" label="男"></el-option>
            <el-option :value="false" label="女"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="出生日期">
          <el-date-picker v-model="date"></el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="putCustomer">确定</el-button>
          <el-button @click="edit=false">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import {deleteCustomer, getCustomer, putCustomer} from "@/api/customer";
import dateFormat from "dateformat";

export default {
  name: "customer-table",
  props: ['size', 'page', 'name', 'id', 'order', 'by'],
  beforeMount() {
    this.init()
  },
  data() {
    return {
      isDelete: false,
      data: [],
      deleteId: 0,
      visible: false,
      edit: false,
      editName: '',
      editSex: '',
      date: '',
      editId: 0,
      count: 0,
    }
  },
  methods: {
    async init() {
      const res = await getCustomer(this.id, this.name, this.order, this.by, this.page, this.size)
      this.data = res.data
      console.log(res.size)
      this.count = res.size
    },
    async deleteCustomer(id) {
      try {
        await deleteCustomer(id)
        this.$emit('update')
        this.visible = false
      } catch (err) {
        console.error(err)
      }
    },
    async putCustomer() {
      try {
        console.log(this.date)
        if (this.date !== ''&&this.date!==null)
          this.date = dateFormat(this.date, 'yyyy-mm-dd')
        else this.date = null
        console.log(this.date)
        await putCustomer(this.editId, this.editName, this.date, this.editSex)
        this.$emit('update')
        this.edit = false
      } catch (err) {
        console.error(err)
      }
    },
    changePage(val){
      this.$emit('changePage',val)
    },
    debug(scope) {
      console.log(scope)
    }
  },
  watch: {
    id() {
      this.init()
    },
    name() {
      this.init()
    },
    order() {
      this.init()
    },
    by() {
      this.init()
    },
    page() {
      this.init()
    },
    size() {
      this.init()
    }
  }
}
</script>

<style scoped>

</style>