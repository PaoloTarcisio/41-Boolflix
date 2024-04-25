<script>
import axios from 'axios';
import { store } from '../store';


export default {
    data() {
        return {
            store,
        };
    },
}

</script>

<template>
    <header>
        <div class="container">
            <div class="row p-3 justify-content-evenly align-items-center">
                <div class="col-4">
                    <h1>BOOLFLIX</h1>
                </div>

                <div class="search-form col-8 p-3">
                    <input v-model="store.searchText" type="text" placeholder="Inserisci il titolo del film o di una serie TV">
                    <button @click="$emit('performSearch')">
                        CERCA
                    </button>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>

    header {

        background-color: black;
        line-height: rem;

        h1
        {
            color: red;
            font-weight: 600;
            text-shadow: 0px 0 20px rgb(170, 0, 0);
            text-decoration-line: underline overline;
        }

        .search-form
        {
            flex-grow: 1;
            
            input
            {
                width: 75%;
                height: 3rem;
                padding: 1.4rem;
                background-color: black;
                border: 2px solid red;
                border-radius: 5px;
                color: white;

                
            }

            input:focus-visible
            {
                outline: none;
                background-color: rgba(67, 67, 67, 0.15);
                border: 3px solid red;
                box-shadow: 1px 1px 20px rgb(130, 0, 0);
                scale: 1.02;
                
            }
            
            input:focus-visible::placeholder {
                color: white;
            }

            button
            {
                font-size: 1.1rem;
                font-weight: 500;
                margin-left: 1rem;
                padding: 6px 14px;
                color: red;
                border: 2px solid red;
                background-color: black;
                border-radius: 30000px;
            }

            button:hover
            {
                color: black;
                background-color: red;
                transition: 0.5s;
            }
        }
    }

</style>
