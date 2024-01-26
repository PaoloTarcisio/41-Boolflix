<script>
import { store } from '../store';

export default {
    data() {
        return {
            
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
        }
    }
}

</script>

<template>
        <div>
            <img :src="'https://image.tmdb.org/t/p/original' + poster_path" alt="non funziona">
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
        <div><img :src="getFlag(original_language)" alt=""></div>
        <div>
            <div>{{ vote_average }}</div>
        </div>
</template>


<style lang="scss" scoped>
</style>