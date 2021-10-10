<template>
    <div>
        <h1>Setup the bot</h1>
        <form v-on:submit="handleSubmit" @submit.prevent>
            <h2>Current reply:{{currentmsg}}</h2>
        
            <input type="text"
             @input="handleChange1"
              :value="botquery"  
              name="botquery"
              placeholder="Wingman's reply">
            <button type="submit">Submit</button>
        </form>
        <form v-on:submit="handleSubmitReq" @submit.prevent>
            <h2>Current denpendency:{{currentdep}}</h2>
        
            <input type="text"
             @input="handleChange2"
              :value="dependent"
              name="dependent"  
              placeholder="Wingman reply to this message">
            <button type="submit">Submit</button>
        </form>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name:'Config',
    data:()=>({
        botquery:'',
        currentmsg:'',
        dependent:'',
        currentdep:''
    }),
    mounted(){
        this.getMsg()
        this.getReq()
    },
    methods:{
        async getMsg(){
            let res = await axios.get(`http://localhost:3001/api/database/get`)
            console.log(res)
            this.currentmsg = res.data.msg.message
        },
        async getReq(){
            let res = await axios.get(`http://localhost:3001/api/database/getreq`)
            console.log(res)
            this.currentdep = res.data.msg.message
        },
        
        async handleSubmit(){
            let body = {"message":this.botquery}
            let res  = await axios.put('http://localhost:3001/api/database/update',body)
            this.botquery = ''
            this.getMsg()
            console.log(res)
        },
        async handleSubmitReq(){
            let body = {"message":this.dependent}
            let res  = await axios.put('http://localhost:3001/api/database/updatereq',body)
            this.dependent = ''
            this.getReq()
            console.log(res)
        },
        handleChange1(event){
            
            this.botquery = event.target.value
            console.log(this.botquery)
        },
        handleChange2(event){
            
            this.dependent = event.target.value
            console.log(this.currentdep)
        }
    }
}
</script>