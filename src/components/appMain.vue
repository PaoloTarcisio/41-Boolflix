<script>
import { store } from '../store';


export default {
    data() {
        return {
            store,
        };
    },
    methods: {

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
                            {{movie.original_language}}
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
