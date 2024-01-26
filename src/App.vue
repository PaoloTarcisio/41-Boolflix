<script>

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
        search () {
            axios
                .get ('https://api.themoviedb.org/3/search/movie', {
                    params: {
                        api_key: '29ad48fd7b0d25cd023cbbc78c52e7dc',
                        query: this.store.searchText
                    }
                })
                .then ((response) => {
                    console.log (response.data);
                    this.store.movies = response.data.results;
                });


                // 

            axios
                .get ('https://api.themoviedb.org/3/search/tv', {
                    params: {
                        api_key: '29ad48fd7b0d25cd023cbbc78c52e7dc',
                        query: this.store.searchText
                    }
                })
                .then ((response) => {
                    console.log (response.data);
                    this.store.series = response.data.results;
                });
        }        
    }
}

    
</script>

<template>

    <appHeader @performSearch="search()"/>
    <appMain/>

</template>

<style lang="scss">
</style>
