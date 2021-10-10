<template>
    <nav>
        <router-link exact-active-class="active_link" class="link" to="/">Home</router-link>
        <router-link exact-active-class="active_link" class="link" to="/config">Config</router-link>
        <router-link  v-if="notlogin"  exact-active-class="active_link" class="link" to="/login">Login</router-link>
        <button   v-else @click="logout">Logout</button>
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
            if(localStorage.token){
                this.notlogin = false
            }else{
                this.notlogin = true
            }
           
        },
        logout(){
            localStorage.removeItem('token')
            this.$router.go()
        }
    },
    mounted(){
        this.checkNotLogin()
        
    }
}
</script>