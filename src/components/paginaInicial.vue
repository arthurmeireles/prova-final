<template>
    <div>
        <Navbar></Navbar>
        
        <main class="bg-secondary container-fluid">
            
            <div class="row">
                <div class="col-md-4 col-sm-12 my-3" v-for="imagem in imagens" :key="imagem.id">
                    <div class="card"  >
                        <div class="img">
                            <b-img
                            :src="imagem.imagem"
                            class=" img-fluid"
                          ></b-img>
                        </div>
                        <div class="info-publicacao"></div>
                        
                    </div>
                </div>
        
            </div>
        </main>
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