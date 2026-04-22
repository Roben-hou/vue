import { reactive, ref, onMounted, computed } from 'vue'
import axios from 'axios'
export default function () {
    let sum = ref(0)
    let bigSum = computed(() => {
        return sum.value * 10
    })
    function sumAdd() {
        sum.value += 1
    }
    onMounted(() => {
        sumAdd()
    })
    return { sum, sumAdd, bigSum }
}
