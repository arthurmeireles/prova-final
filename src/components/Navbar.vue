<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item ">
                        <a class="nav-link"   @click="$router.push({ name: 'paginaInicial' })">Inspirações </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"  @click="$router.push({ name: 'tatuadores' })">Tatuadores</a>
                    </li>>

                </ul>
            
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "Navbar"
    };
</script>
