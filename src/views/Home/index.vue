<template>
    <div class="container">
        <h1>管理系统</h1>
        <p>以下为公告</p>
        <el-card>
            <div>
                v1.0版本上线🌶
            </div>
        </el-card>
        <h3>近期活动</h3>
        <el-timeline>
<!--            <el-timeline-item-->
<!--                v-for="(activity, index) in activities"-->
<!--                :key="index"-->
<!--                :timestamp="activity.timestamp">-->
<!--                {{activity.content}}-->
<!--            </el-timeline-item>-->
            <el-timeline-item timestamp="2023-01-01">
                活动1
            </el-timeline-item>
            <el-timeline-item timestamp="2023-02-01">
                活动2
            </el-timeline-item>
            <el-timeline-item timestamp="2023-03-01">
                活动3
            </el-timeline-item>
            <el-timeline-item timestamp="2023-04-01">
                活动4
            </el-timeline-item>
            <el-timeline-item timestamp="2023-05-01">
                活动5
            </el-timeline-item>
            <el-timeline-item timestamp="2023-06-01">
                活动6
            </el-timeline-item>
            <el-timeline-item timestamp="2023-07-01">
                活动7
            </el-timeline-item>
            <el-timeline-item timestamp="2023-08-01">
                活动8
            </el-timeline-item>
        </el-timeline>
    </div>
</template>

<script>
export default {
    name: "home-index",
    methods:{
        activities: [{
            content: '活动按期开始',
            timestamp: '2023-04-30'
        }, {
            content: '通过审核',
            timestamp: '2023-05-12'
        }, {
            content: '创建成功',
            timestamp: '2023-05-15'
        }]
    }
}
</script>

<style scoped>


</style>