<template>
    <div>
        <Navbar></Navbar>
        
        <main class="bg-secondary container-fluid">
            
            <div class="row m-3">
                <b-card-group columns>


                    <div class=" my-2" v-for="imagem in imagens" :key="imagem.id">
                        <div class="card card-rounded w-100"  >
                            <div class="img">
                                <b-img
                                :src="imagem.imagem"
                                class=" img-fluid"
                            ></b-img>
                            </div>
                            <div class="info-publicacao"></div>
                            
                        </div>
                    </div>
                </b-card-group>


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