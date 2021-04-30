<template>
    <div>
        <Navbar></Navbar>
        
        <main class="bg-secondary container-fluid">
            
            <div class="row">
                <div class="col-md-4 col-sm-12 my-3" v-for="estudio in estudios" :key="estudio.id">
                    <div class="card"  >
                        <div class="img">
                     {{estudio}}
                        </div>
                        <div class="info-publicacao"></div>
                                        <div class="col-md-4 pt-3" v-for="tatuador in tatuadores" :key="tatuador.id" >
                    <div class="card">
                        <div class="card-body text-center">
                            <div>
                                <div class="pb-3"> 
                                    <b-avatar class="img-thumbnail mb-4 " :src=tatuador.usuario.avatar alt="profile image"></b-avatar>

                                    <h4>{{tatuador.usuario.nome.length > 22 ? tatuador.usuario.nome.substring(0,22) + "..." : tatuador.usuarionome}}</h4>
                                    <small class="text-muted mb-0">{{tatuador.usuario.enderecos_usuario[0].cidade.toUpperCase()}}</small>
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
                </div>
        
            </div>
        </main>
    </div>
</template>

<script>

import serviceEstudios from '@/service/serviceEstudios'
import Navbar from './Navbar'

export default {
    name: "estudios",
    data(){
        return{
            estudios: []
        }
    },
    components:{
        Navbar
    },
     mounted() {
        console.log("chegou")
        serviceEstudios.listarEstudios().then(resposta => {
            this.estudios = resposta.data.results
        })
    },



}
</script>