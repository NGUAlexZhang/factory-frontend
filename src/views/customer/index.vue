<template>
  <div>
    <div>
      <el-button type="primary" @click="add=true;this.name='';this.sex='1';this.date='2000-01-01'">新增</el-button>
      <span style="margin-right: 5px ;margin-left: 5px">
      <el-input v-model="id" style="width:20%" placeholder="id"></el-input>
      </span>
      <span style="margin-right: 5px">
        <el-input v-model="name" style="width:20%" placeholder="姓名"></el-input>
      </span>
      <el-select v-model="by" style="margin-right: 5px">
        <el-option value="name" label="姓名"></el-option>
        <el-option value="id" label="id"></el-option>
      </el-select>
      <el-select v-model="order">
        <el-option value="DESC" label="降序"></el-option>
        <el-option value="ASC" label="升序"></el-option>
      </el-select>
    </div>
    <customer-table :id="id" :name="name" :by="by" :order="order" :size="size" :page="page" :key="key"
                    @update="update" @changePage="changePage"></customer-table>
    <el-dialog title="新增客户" :visible.sync="add">
      <el-form>
        <el-form-item>
          <el-input v-model="addName" placeholder="姓名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-select v-model="sex" style="margin-right: 10px">
            <el-option value="1" label="男"></el-option>
            <el-option value="0" label="女"></el-option>
          </el-select>
          <el-date-picker v-model="date"></el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submit">提交</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import customerTable from "@/views/customer/customer-table";
import {addCustomer} from "@/api/customer";
import dateFormat from "dateformat";

export default {
  name: "customer-index",
  data() {
    return {
      page: 1,
      size: 10,
      name: '',
      id: '',
      order: 'DESC',
      by: 'name',
      add: false,
      addName: '',
      sex: '1',
      date: '',
      key: false
    }
  },
  methods: {
    async submit() {
      if (this.date !== '' && this.date !== null)
        this.date = dateFormat(this.date, 'yyyy-mm-dd')
      else this.date = null
      try {
        await addCustomer(this.addName, this.date, this.sex)
        this.add = false
        this.key = !this.key
      } catch (e) {
        console.log(e)
      }
    },
    update() {
      this.key = !this.key
    },
    changePage(val) {
      this.page = val
    }
  },
  components: {customerTable}
}
</script>

<style scoped>

</style>