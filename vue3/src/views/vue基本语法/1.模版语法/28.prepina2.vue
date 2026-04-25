<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios';
import { nanoid } from 'nanoid';
import { useTalkstore } from '@/stores/talk';
const talkStore = useTalkstore()
talkStore.$subscribe((mutate, state) => {
    console.log('talkstore的state数据变化了',mutate,state)
    localStorage.setItem('talkStore',JSON.stringify(state.countryList))
})
async function getCountry() {
    let result = await axios.get('https://v1.hitokoto.cn/?encode=text')
    let obj = {
        id: nanoid(),
        name:result.data
    } 
    talkStore.countryList.unshift(obj)
    console.log(obj)
}



</script>

<template>
    <div class="country">
        <button @click="getCountry">add country</button>
        <ul>
            <li v-for="country in talkStore.countryList" :key="country.id">{{country.name}}</li>
        </ul>
    </div>
</template>

<style scoped>
.country{
  background-color: #afdd4b;
  box-shadow: 0 0 10px;
  padding: 20px;
  border-radius: 10px;

}
.border{
    margin-top: 50px;
}
</style>