<template>
    <div>
    <div v-if="userName">
        <h1>Welcome {{userName}}</h1>
        <img :src="avatar" alt="avatar">
    </div>
    <div v-else >
        <h1>Hello visitor</h1>
    </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Home',
    
    data:()=>({
        userName:null,
        avatar:null
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
            this.userid = result.data.id 
            let avatar = result.data.avatar
            this.avatar = `https://cdn.discordapp.com/avatars/${this.userid}/${avatar}.jpg`
            console.log(result)
           }
        }
    }
}
</script>