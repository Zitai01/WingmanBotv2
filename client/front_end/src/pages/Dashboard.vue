<template>
    <div>
        <h1>Hello</h1>
    </div>
</template>

<script>
export default {
    name:'Dashboard',
    methods:{
        storeCode(){
            let code = this.$route.params.code
            localStorage.code = code
            this.$router.push(`/`)
        }
    },
    mounted(){
        this.storeCode()
    }
}
</script>