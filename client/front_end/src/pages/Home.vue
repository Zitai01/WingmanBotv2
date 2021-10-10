<template>
    <div>
        <h1>Welcoming {{userName}}</h1>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Home',
    data:()=>({
        userName:null
    }),
    mounted(){
        this.getuserProfile()
    },
    methods:{
       async getuserProfile(){
           let token = localStorage.token
           if (token){

           
           let header = {headers:{ Authorization: `Bearer ${token}`}}
           const result = await axios.get('https://discordapp.com/api/users/@me',header)  
            this.userName = result.data.username
            console.log(result)
           }
        }
    }
}
</script>