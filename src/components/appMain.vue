<script>
import axios from 'axios';
import { store } from '../store';
import  SingleElement  from './SingleElement.vue';


export default {
    data() {
        return {
            store,
            layoutClass: "my-layout"
        };
    },
    components:{
        SingleElement
    },
    methods: {
        search() {
        }
    }
}

</script>

<template>
    <main>
        <div class="container">
            <section>
                <div class="section-movies-title text-center">
                    <h2>
                        MOVIES:
                    </h2>
                </div>
                <div class="row">
                    <div class="col-lg-3 col-md-6 col-sm-12 p-3" v-for="(movie, i) in store.foundMovies" :key="i">

                        <SingleElement
                            :titleOrName="movie.title"
                            :original_titleOrName="movie.original_title"
                            :original_language="movie.original_language"
                            :vote_average="movie.vote_average"
                            :posterPath="movie.poster_path"
                        />
                    </div>
                </div>
            </section>

            <hr>

            <section>
                <div class="section-series-title text-center">
                    <h2>
                        TV SERIES:
                    </h2>
                </div>
                <div class="row">
                    <div class="col-lg-3 col-md-6 col-sm-12 p-3" v-for="(serie, i) in store.foundSeries" :key="i">

                        <SingleElement
                            :titleOrName="serie.name"
                            :original_titleOrName="serie.original_name"
                            :original_language="serie.original_language"
                            :vote_average="serie.vote_average"
                            :posterPath="serie.poster_path"
                        />
                    </div>
                </div>
            </section>
        </div>
    </main>
</template>

<style lang="scss" scoped>
    main
    {
        background-color: rgb(67, 67, 67);

        h2
        {
            color: white;
            padding: 1rem;
        }

        hr
        {
            color: black;
            opacity: 1;
        }
    }
</style>
