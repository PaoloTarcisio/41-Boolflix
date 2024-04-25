<script>
import { store } from '../store';

export default {
    data() {
        return {
            miaClasse: "my-card"
        };
    },
    props: {
        titleOrName: String,
        original_titleOrName: String,
        original_language: String,
        vote_average: Number,
        posterPath: String,

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
            
            else if (lang == 'hi') {
                flagLink = 'https://flagicons.lipis.dev/flags/4x3/in.svg';
            }

            else {
                flagLink = 'https://flagicons.lipis.dev/flags/4x3/' + lang + '.svg';
            }
            return flagLink;
        },

        rating(vote) {
            let votoArrotondato = Math.ceil(vote / 2);
            // console.log(votoArrotondato)
            return votoArrotondato;
        }
    },
}

</script>

<template>
    <div class="my-card">
        <div class="poster">
            <img :src="'https://image.tmdb.org/t/p/w500' + posterPath" alt="">
        </div>
        <div class="description p-4">
            <div class="py-1">
                <h4>
                    Titolo:
                </h4>
                {{ titleOrName }}
            </div>
            <div class="py-1">
                <h4>
                    Titolo Originale:
                </h4>
                {{ original_titleOrName }}
            </div>
            <div class="py-1">
                <h4>
                    Lingua Originale:
                </h4>
                <div class="language-flag">
                    <img :src="getFlag(original_language)" alt="">
                </div>
                <div class="language-lang p-2">
                    {{ original_language }}
                </div>
            </div>
            <div class="py-1">
                <h4>
                    Voto Medio:
                </h4>
                <i v-for="i in rating(vote_average)" class="fa-solid fa-star"></i>
                <i v-for="i in (5 - rating(vote_average))" class="fa-regular fa-star"></i>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>

.my-card
    {
        border: 1px solid grey;
        border-radius: 8px;

        .poster
        {
            text-align: center;
            img
            {
                width: 100%;
                height: auto;
                border-radius: 8px;
            }
        }

        .description
        {
            display: none;
            height: 100%;

        }
        
        
    }

.my-card:hover
{
    position: relative;

    .description
        {
            display: block;
            width: 100%;
            position: absolute;
            top: 0;
            left: 0;
            background-color: rgba($color: #000000, $alpha: 0.7);
            color: white;
            border-radius: 7px;
            height: 100%;
            max-height: 100%;
            
            
            .language-flag > img
            {
                width: 50px;
                height: auto;
                object-fit: cover;
                border: 1px solid black;
                border-radius: 5px;
            }
        }


}
</style>