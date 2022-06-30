<template>
    <el-form ref="form" label-width="100px" :model="form" :inline="inline">
        <el-form-item v-for="item in formLabel" :key="item.label" :label="item.label">
            <el-input v-if="item.type === 'input'" :placeholder="'请输入' + item.label" v-model="form[item.model]"></el-input>
            <el-switch v-if="item.type === 'switch'" v-model="form[item.model]"></el-switch>
            <el-date-picker v-if="item.type === 'date'" type="date" value-format="yyyy-MM-dd" :placeholder="选择日期" v-model="form[item.model]"></el-date-picker>
            <el-select v-if="item.type === 'select'" :placeholder="请选择" v-model="form[item.model]">
                <!-- 下面这个循环遍历，循环的是外层遍历出来item中的opts -->
                <el-option v-for="item in item.opts" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
        </el-form-item>
        <!-- 如果传入的不符合要求，我们自定义了两个插槽来进行插入数据 -->
        <el-form-item><slot></slot></el-form-item>
    </el-form>
</template>

<script>
export default {
    name:"CommonForm",
    props:{
        formLabel:Array,
        form:Array,
        inline:Boolean,
    },
    data() {
        return {
            
        }
    },
}
</script>

<style>

</style>