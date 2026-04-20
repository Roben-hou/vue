<script setup lang="ts" name="Person">
import { ref } from 'vue';

// 创建一个容器，用于存储 ref 标记的 DOM 元素
let c1 = ref()

// 使用 ref 定义一些额外的数据
let a = ref(1)
let b = ref(2)
let c = ref(3)

function checkCountry() {
    // 【推荐方式】：使用 Vue 的 ref。隔离性好，不会与其他组件冲突
    console.log(c1.value)

    // 【之前方式/不推荐】：通过原生的 ID 获取。
    // 缺点：ID 是全局的，如果 App.vue 或其他组件也有叫 c1 的 ID，就会产生冲突（污染）
    // console.log(document.getElementById('c1'))
}

// 【重要组件通信】：defineExpose 用于显式地暴露组件内部的属性或方法给父组件。
// 在使用 <script setup> 的组件中，默认内容都是私有的。
// 即使父组件通过 ref 拿到了当前子组件，也只能看到被这里暴露出去的内容（如 a 和 b，但不包含 c）。
defineExpose({a, b})
</script>

<template>
    <div class="person">
        <h2>情况6: 标签的 ref 属性</h2>
        
        <!-- 使用 ref 替代 id，确保 DOM 访问的局部性（仅限当前组件） -->
        <h3 ref="c1">china</h3>
        
        <!-- <h3 id="c1">china</h3> -->
        
        <h3>yichun</h3>
        <h3>nagi</h3>
        <button @click="checkCountry">显示 DOM 内容</button>
    </div>
</template>

<style scoped>
.person {
  background-color: #4ba0dd;
  box-shadow: 0 0 10px;
  padding: 20px;
  border-radius: 10px;
}
button{
    margin: 0 5px;
}
</style>

