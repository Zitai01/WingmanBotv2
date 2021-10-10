<template>
    <nav>
        <router-link exact-active-class="active_link" class="link" to="/">Home</router-link>
        <router-link exact-active-class="active_link" class="link" to="/config">Config</router-link>
        <router-link :key='notlogin' v-if="notlogin"  exact-active-class="active_link" class="link" to="/login">Login</router-link>
        <button  :key='notlogin' v-else @click="logout">Logout</button>
    </nav>
</template>
<script>
export default {
    name:'Nav',
    data:()=>({
        notlogin:false
    }
    ),
    methods:{
        checkNotLogin(){
            if(localStorage.code){
                this.notlogin = false
            }else{
                this.notlogin = true
            }
           
        },
        logout(){
            localStorage.removeItem('code')
            this.$router.go()
        }
    },
    mounted(){
        this.checkNotLogin()
        
    }
}
</script>