<script>
import axios from 'axios';
import { store } from '../store';
import  SingleElement  from './SingleElement.vue';


export default {
    data() {
        return {
            store,
        };
    },
    components:{
        SingleElement
    },
    methods: {
        search() {
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
        },
        getFlag(lang) {
            let flagLink = '';

            if (lang == 'en') {
                flagLink = 'https://flagicons.lipis.dev/flags/4x3/gb.svg';
            }

            else if (lang == 'ja') {
                flagLink = 'https://flagicons.lipis.dev/flags/4x3/jp.svg';
            }

            else {
                flagLink = 'https://flagicons.lipis.dev/flags/4x3/' + lang + '.svg';
                
            }
            return flagLink;
        }
    }
}

</script>

<template>
    <main>
        <div>
            <div>MOVIES</div>
            <ul>
                <li v-for="(movie, i) in store.movies" :key="i">
                    <SingleElement
                    :title="movie.title"
                    :original_title="movie.original_title"
                    :original_language="movie.original_language"
                    :vote_average="movie.vote_average"/>

                        <hr>
                </li>
            </ul>
        </div>
        <hr>
        <div>
            <div>SERIES</div>
            <ul>
                <li v-for="(serie, i) in store.series" :key="i">
                    <SingleElement
                    :title="serie.name"
                    :original_title="serie.original_name"
                    :original_language="serie.original_language"
                    :vote_average="serie.vote_average"/>

                    <hr>
                </li>
            </ul>
        </div>
    </main>
</template>

<style lang="scss" scoped>
</style>
