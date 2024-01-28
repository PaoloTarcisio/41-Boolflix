<script>
import { store } from '../store';

export default {
    data() {
        return {
            miaClasse: "my-card"
        };
    },
    props: {
        title: String,
        original_title: String,
        original_language: String,
        vote_average: Number,
        poster_path: String,

    },
    methods: {
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
        },
    },
    computed: {
        roundNumber() {
    
            return Math.ceil(this.vote_average / 2);        
    
        },
        poster(){
            return 'https://image.tmdb.org/t/p/original' + this.poster_path;
        }
    }
}

</script>

<template>
    <div class="my-card">
        <div>
            <img class="poster-img" :src="poster" :alt="title">
        </div>
        <div>
            <div>{{ title }}</div>
        </div>
        <div>
            <div>{{ original_title }}</div>
        </div>
        <div>
            <div>{{ original_language }}</div>
        </div>
        <div><img :src="getFlag(original_language)" alt="Image Not Found"></div>
        <div>
            <div> Voto Medio: {{ vote_average }}</div>
        </div>
        <div>
            <div>Voto Arrotondato: {{ roundNumber }}</div>
        </div>
        <div>
            <i v-for="i in roundNumber" class="fa-solid fa-star"></i>
            <i v-for="i in (5 - roundNumber)" class="fa-regular fa-star"></i>
        </div>
    </div>
</template>


<style lang="scss" scoped>

    .poster-img {
        width: 200px;
        height: auto;
    }

    .my-card {

        text-align: center;

        :not(:first-child) {
            display: none;
        }

        :hover {
            :not(:first-child) {
            display: block;

        }
        }
    }



</style>