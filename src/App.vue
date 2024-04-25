<script>
//chiave API        29ad48fd7b0d25cd023cbbc78c52e7dc

import appHeader from './components/appHeader.vue';
import appMain from './components/appMain.vue';

import axios from 'axios';
import { store } from './store';

export default {
    data() {
        return {
            store,
        };
    },
    components: {
        appHeader,
        appMain,
    },  
    methods: {
        search() {
            axios
            // ricerca del film dove passo la chiave api e la query di ricerca inserita nell'input dall'utente
                .get('http://api.themoviedb.org/3/search/movie', {
                    params: {
                        // chiave identificativa 
                        api_key: '29ad48fd7b0d25cd023cbbc78c52e7dc',
                        // passo come query la ricerca inserita dall'utente
                        query: this.store.searchText,
                        // imposto la lingua della risposta api
                        language: "it",
                    }
                })
                .then((response) => {
                    // console.log(response.data.results);
                    this.store.foundMovies = response.data.results;
                    //console.log(this.store.foundMovies);
                })


                // chiamata per le serie tv
                axios
            // ricerca delle serie tv dove passo la chiave api e la query di ricerca inserita nell'input dall'utente
                .get('http://api.themoviedb.org/3/search/tv', {
                    params: {
                        // chiave identificativa 
                        api_key: '29ad48fd7b0d25cd023cbbc78c52e7dc',
                        // passo come query la ricerca inserita dall'utente
                        query: this.store.searchText,
                        // imposto la lingua della risposta api
                        language: "it",
                    }
                })
                .then((response) => {
                    // console.log(response.data.results);
                    this.store.foundSeries = response.data.results;
                    //console.log(this.store.foundSeries);
                })
        },

    }
}
    


    
</script>

<template>

    <appHeader @performSearch="search()"/>
    <appMain/>

</template>

<style lang="scss">
</style>
