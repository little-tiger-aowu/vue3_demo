<template>
    <div>
        {{ store.state.count }}<br/>
        <van-button @click="addCount" type="primary">相加+</van-button><br/>
        {{ store.state.name }}<br/>
        {{ store.state.age }}
    </div>
</template>

<script lang="ts">
    import {defineComponent, onMounted} from 'vue';
    import { useStore } from "vuex"
    import { deterUserIsForm } from '../api/path'
    export default defineComponent({
        setup() {
            const store = useStore()
            const addCount = () => {
                // 在这里提交了mutations中的addCount方法
                store.commit("addCount", 1)
            }
            onMounted(()=>{
                deterUserIsForm()
            })
            return { store, addCount };
        },
    });
</script>

<style scoped lang="scss">

</style>