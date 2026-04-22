<script setup lang="ts">
import { ref, computed } from 'vue';

let firstname = ref('')
let lastname = ref('')


// let fullname = computed({
//     get() {
//         return firstname.value.slice(0, 1).toUpperCase() + firstname.value.slice(1) + '-' + lastname.value.slice(0, 1).toUpperCase() + lastname.value.slice(1)
//     },
//     set(val) {
//         const [str1, str2] = val.split('-')
//         firstname.value = str1
//         lastname.value = str2
//     }
// })
//这样写是只读计算属性,如果想修改fullname,需要使用计算属性的set方法如上
let fullname = computed(() => {
    return firstname.value.slice(0, 1).toUpperCase() + firstname.value.slice(1) + '-' + lastname.value.slice(0, 1).toUpperCase() + lastname.value.slice(1)
})
function changename() {
    fullname.value = 'jack-zhang'
}
</script>


<template>
<div class="person">
    firstname <input type="text" v-model="firstname"><br>
    lastname <input type="text" v-model="lastname"><br>
    fullname {{ fullname }}
    <!-- fullname {{ fullname }} -->
    <!-- fullname {{ fullname }} -->
    <!-- fullname {{ fullname }} -->
    <!-- fullname {{ fullname }} -->
     <button @click="changename">changename to jack-zhang</button>
</div>
</template>

<style>
.person {
  background-color: #4ba0dd;
  box-shadow: 0 0 10px;
  padding: 20px;
  border-radius: 10px;
}
</style>

