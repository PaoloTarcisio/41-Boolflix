<script>
import { store } from '../store';


export default {
    data() {
        return {
            store,
        };
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
    <main>
        <div>
            <ul>
                <li v-for="(movie, i) in store.movies" :key="i">
                    <ul>
                        <li>
                            {{movie.title}}
                        </li>
                        <li>
                            {{movie.original_title}}
                        </li>
                        <li>
                            <img :src="getFlag(movie.original_language)" :alt="movie.original_language">
                        </li>
                        <li>
                            {{movie.vote_average}}
                        </li>
                        <hr>
                    </ul>
                </li>
            </ul>
        </div>
    </main>
</template>

<style lang="scss" scoped>
</style>
