<template>
    <div>
        <Navbar></Navbar>
        
        <div>
            {{imagens}}
        </div>
    </div>
</template>

<script>

import serviceImagens from '@/service/serviceImagens'
import Navbar from './Navbar'

export default {
    name: "paginaInicial",
    data(){
        return{
            imagens: []
        }
    },
    components:{
        Navbar
    },
     mounted() {
         console.log("chegou")
        serviceImagens.listarPublicacoes().then(resposta => {
            this.imagens = resposta.data
        })
    },



}
</script>