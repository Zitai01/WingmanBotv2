<template>
    <div>
        <img v-if='avatar' :src="avatar" alt="avatar">
    </div>
</template>

<script>
export default {
    name:'TopBar',
    data:()=>({
        avatar:null
    }),
    methods:{
        getAvatar
    },
    mounted(){
        
    }
}
</script>