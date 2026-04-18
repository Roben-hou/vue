<script setup lang="ts">
import { ref } from 'vue';

/* 
   第9课：v-model 双向数据绑定
   1. 什么是双向绑定？
      - 数据改变 -> 视图自动更新
      - 视图改变（用户输入） -> 数据自动更新
   2. v-model 主要用于表单元素：input, textarea, select 等。
*/

// 定义一个响应式变量
let message = ref('Hello Vue3!')

let favorColor = ref('red')

let isAgreed = ref(false)

</script>

<template>
<div class="v-model-demo">
    <h1>第9课:v-model 双向绑定</h1>

    <section>
        <h3>1. 文本输入框</h3>
        <!-- v-model 直接绑定变量 -->
        <input type="text" v-model="message">
        <p>您输入的内容是：{{ message }}</p>
        <button @click="message = '已被代码重置'">重置内容</button>
    </section>

    <hr>

    <section>
        <h3>2. 单选框 (Radio)</h3>
        <label><input type="radio" value="red" v-model="favorColor"> 红色</label>
        <label><input type="radio" value="blue" v-model="favorColor"> 蓝色</label>
        <p>您选中的颜色是：<span :style="{color: favorColor}">{{ favorColor }}</span></p>
    </section>

    <hr>

    <section>
        <h3>3. 复选框 (Checkbox)</h3>
        <label><input type="checkbox" v-model="isAgreed"> 同意协议</label>
        <p>状态：{{ isAgreed ? '已同意' : '未同意' }}</p>
    </section>
</div>
</template>

<style scoped>
.v-model-demo {
    background-color: #f0f9eb;
    padding: 20px;
    border: 2px solid #67c23a;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

section {
    margin: 15px 0;
}

input[type="text"] {
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #ccc;
    width: 200px;
}

h1 {
    color: #409eff;
}
</style>
