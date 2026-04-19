<script setup lang="ts">
// 导入最新的课程组件
import Test1 from './views/vue基本语法/1.模版语法/1.插值表达式.vue'
import Test2 from './views/vue基本语法/1.模版语法/2.动态绑定.vue'
import Test3 from './views/vue基本语法/1.模版语法/3条件渲染.vue'
import Test4 from './views/vue基本语法/1.模版语法/4.列表渲染.vue'
import Test5 from './views/vue基本语法/1.模版语法/5.事件绑定.vue'
import Test6 from './views/vue基本语法/1.模版语法/6.prevent和once.vue'
import Test7 from './views/vue基本语法/1.模版语法/7.事件冒泡和阻止事件冒泡.vue'
import Test8 from './views/vue基本语法/1.模版语法/8.事件委托.vue'
import Test9 from './views/vue基本语法/1.模版语法/9.v-model.vue'
import Test10 from './views/vue基本语法/1.模版语法/10.ref1.vue'
import Test11 from './views/vue基本语法/1.模版语法/11.reactive.vue'
import Test12 from './views/vue基本语法/1.模版语法/12.refuseinobj.vue'
import Test13 from './views/vue基本语法/1.模版语法/13.refandreactive.vue'
import Test14 from './views/vue基本语法/1.模版语法/14.torefs.vue'
import Test15 from './views/vue基本语法/1.模版语法/15.computed计算属性.vue'
import Test16 from './views/vue基本语法/1.模版语法/16.watch1.vue'
</script>

<template>
  <div class="container">
    <!-- 显示当前学习的第9课 -->
    <Test16/>
    
    <!-- 如果想看之前的课程，可以切换上面的组件 -->
    <!-- <Test14/> -->
  </div>
</template>

<style>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>
