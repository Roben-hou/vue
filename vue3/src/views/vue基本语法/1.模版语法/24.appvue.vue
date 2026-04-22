     <!-- 务必看懂以下代码
     <h2 a="1+1" :b="1+1" c="x" :d="x"></h2> -->
    <Test24 a="'haha'" :list="PersonList"/>
    ts//import { type Persons } from '@/types'
import { reactive } from 'vue'
let PersonList = reactive < Persons >( [
  { id: 'x2301', name: 'nagi', age: 20 },
  { id: 'x2302', name: 'luozipeng', age: 18 },
  { id: 'x2303', name: 'hou', age: 19 },
  { id: 'x2304', name: 'pengpeng', age: 0 }
])
let x=9