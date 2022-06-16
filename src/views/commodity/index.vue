<template>
  <div>
    <div>
      <el-button type="primary" @click="add=true;this.name='';this.addPrice=''">新增</el-button>
      <span style="margin-right: 5px ;margin-left: 5px">
      <el-input v-model="name" style="width:20%" placeholder="商品名称"></el-input>
      </span>
      <el-select v-model="by" style="margin-right: 5px">
        <el-option value="name" label="商品名称"></el-option>
        <el-option value="price" label="价格"></el-option>
      </el-select>
      <el-select v-model="order">
        <el-option value="DESC" label="降序"></el-option>
        <el-option value="ASC" label="升序"></el-option>
      </el-select>
    </div>
    <!--    <customer-table :id="id" :name="name" :by="by" :order="order" :size="size" :page="page" :key="key"-->
    <!--                    @update="update" @changePage="changePage"></customer-table>-->
    <commodity-table :id="id" :name="name" :by="by" :order="order" :size="size" :page="page" :key="key" @update="update"
                     @changePage="changePage"></commodity-table>
    <el-dialog title="新增商品" :visible.sync="add">
      <el-form>
        <el-form-item>
          <el-input v-model="addName" placeholder="名称"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="addPrice" placeholder="价格"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submit">提交</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import {addCommodity} from "@/api/commodity";
import CommodityTable from "@/views/commodity/commodity-table";

export default {
  name: "customer-index",
  components: {CommodityTable},
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
      addPrice: '',
      key: false
    }
  },
  methods: {
    async submit() {
      try {
        await addCommodity(this.addName, this.addPrice)
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
  }
}
</script>

<style scoped>

</style>