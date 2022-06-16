<template>
  <div>
    <el-table :data="data">
      <el-table-column
          prop="name"
          label="名称">
      </el-table-column>

      <el-table-column
          label="价格"
          prop="price"
      >
        <template v-slot="scope">
          <span v-if="scope.row.edit===false">{{ scope.row.price }}</span>
          <el-input v-else></el-input>
        </template>
      </el-table-column>
      <el-table-column
          label="添加于"
          prop="created_at"
      >
      </el-table-column>
      <el-table-column
          label="更新于"
          prop="updated_at">

      </el-table-column>
      <el-table-column label="操作">
        <template v-slot="scope">
          <el-button type="text" @click="edit=true;price=scope.row.price;editName=scope.row.name">更改价格</el-button>
          <el-button type="text" @click="editName=scope.row.name;isDelete=true">删除</el-button>
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
    <el-dialog :visible.sync="edit">
      <el-form>
        <el-form-item label="新价格">
          <el-input v-model="price"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="putCommodity">确定</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <el-dialog :visible.sync="isDelete" title="警告">
      <h1 style="margin-bottom: 20px">你确定要删除吗</h1>
      <div>
        <el-button type="danger" @click="deleteCommodity">确定</el-button>
        <el-button @click="deleteId=undefined;isDelete=false">取消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import dateFormat from "dateformat";
import {deleteCommodity, getCommodities, putCommodity} from "@/api/commodity";

export default {
  name: "commodity-table",
  props: ['size', 'page', 'name', 'order', 'by'],
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
      price: '',
      editName: '',
      editSex: '',
      date: '',
      editId: 0,
      count: 0,
    }
  },
  methods: {
    async init() {
      const res = await getCommodities(this.name, this.order, this.by, this.page, this.size)
      this.data = res.data
      this.data.forEach(item => {
        item.updated_at = dateFormat(item.updated_at, 'yyyy-mm-dd HH:MM:ss')
        item.created_at = dateFormat(item.created_at, 'yyyy-mm-dd HH:MM:ss')
        item.edit = false
      })
      this.count = res.size
    },
    async deleteCommodity() {
      try {
        await deleteCommodity(this.editName)
        this.$emit('update')
        this.visible = false
      } catch (err) {
        console.error(err)
      }
    },
    async putCommodity() {
      try {
        await putCommodity(this.editName, this.price)
        this.$emit('update')
        this.edit = false
      } catch (err) {
        console.error(err)
      }
    },
    changePage(val) {
      this.$emit('changePage', val)
    },
    debug(scope) {
      console.log(scope)
    }
  },
  watch: {
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