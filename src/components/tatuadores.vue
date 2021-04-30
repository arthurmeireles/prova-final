<template>
    <div class="h-100">
        <Navbar></Navbar>
        
        <main class="bg-secondary container-fluid" style="min-heigth: 80vh">
            
            <div class="row">
                <div class="col-md-4 pt-3" v-for="tatuador in tatuadores" :key="tatuador.id" >
                    <div class="card">
                        <div class="card-body text-center">
                            <div>
                                <div class="row mb-3">
                                    <div class="col-md-3 col-sm-12">
                                        <b-avatar class="img-thumbnail" size="5rem" :src=tatuador.usuario.avatar alt="profile image"></b-avatar>
                                    </div>
                                    <div class="col-md-9 col-sm-12 text-left">
                                        <h5>{{tatuador.usuario.nome.length > 22 ? tatuador.usuario.nome.substring(0,22) + "..." : tatuador.usuario.nome}}</h5>
                                        <p>
                                            {{tatuador.usuario.bio}}
                                        </p>
                                        <small class="text-muted mb-0">{{tatuador.usuario.enderecos_usuario[0].cidade.toUpperCase()}}</small>
                                    </div>

                                  
                                </div>
                                <div class="border-top pt-3">
                                    <div class="row">
                                        <div class="col-6">
                                            <h5 class="font-weight-bold mb-0 d-block">{{tatuador.usuario.seguindo.length}}</h5>
                                            <small class="text-muted">Seguindo</small>
                                        </div>
                                        <div class="col-6">
                                            <h5 class="font-weight-bold mb-0 d-block">{{tatuador.usuario.seguidores.length}}</h5>
                                            <small class="text-muted">Seguidores</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                  
                        </div>
                    </div>
                </div>


        
            </div>
        </main>
    </div>
</template>

<script>

import serviceTatuador from '@/service/serviceTatuador'
import Navbar from './Navbar'

export default {
    name: "tatuadores",
    data(){
        return{
            tatuadores: []
        }
    },
    components:{
        Navbar
    },
     mounted() {
        console.log("chegou")
        serviceTatuador.listarTatuadores().then(resposta => {
            this.tatuadores = resposta.data.results
        })
    },



}
</script>

<style>
    .bg-secondary.container-fluid{
        min-height: 95h
    }
</style>