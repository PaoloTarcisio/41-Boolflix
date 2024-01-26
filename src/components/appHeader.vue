<script>
import { store } from '../store';


export default {
    data() {
        return {
            store,

        };
    },
    props: {
        searchText: String
    }
}

</script>

<template>
    <header>
        <form action="#">
            <input v-model="store.searchText" type="text" placeholder="Inserisci il titolo del film o di una serie TV">
            <button @click="$emit('performSearch')">
                CERCA
            </button>
        </form>

    </header>
</template>

<style lang="scss" scoped>

    header {
        
        form {
            display: flex;
            justify-content: center;
            width: 100%;
        }

        form > * {
            margin: 20px;
            padding: 8px;
        }

        form input {
            width: 20%;
        }
    }

</style>
