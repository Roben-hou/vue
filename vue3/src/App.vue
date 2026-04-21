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
import Test17 from './views/vue基本语法/1.模版语法/17.watch2.vue'
import Test18 from './views/vue基本语法/1.模版语法/18.watch3.vue'
import Test19 from './views/vue基本语法/1.模版语法/19.watch4.vue'
import Test20 from './views/vue基本语法/1.模版语法/20.watch5.vue'
import Test21 from './views/vue基本语法/1.模版语法/21.watcheffert.vue'
import Test22 from './views/vue基本语法/1.模版语法/22.标签的ref属性.vue'
import Test23 from './views/vue基本语法/1.模版语法/23.接口type范型回顾.vue'
import Test24 from './views/vue基本语法/1.模版语法/24.props的使用.vue'
import { type Persons } from '@/types'
import { reactive } from 'vue'
let PersonList = reactive < Persons >( [
  { id: 'x2301', name: 'nagi', age: 20 },
  { id: 'x2302', name: 'luozipeng', age: 18 },
  { id: 'x2303', name: 'hou', age: 19 },
  { id: 'x2304', name: 'pengpeng', age: 0 }
])
let x=9
</script>

<template>
  <div class="container">
    <!-- 显示当前学习的第9课 -->
     <!-- 务必看懂以下代码
     <h2 a="1+1" :b="1+1" c="x" :d="x"></h2> -->
    <Test24 a="'haha'" :list="PersonList"/>

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
