<style scoped>
    .container{
        width: 300px;
        height: 100%;
        display: flex;
        flex-direction: column;
        border: 3px solid #E2B4BD;
    }
    .typeButtons{
        display: flex;
        justify-content: space-evenly;
    }

    p{
        color: #2c3e50;
        display: inline-block;
        font-family: "Avenir", Helvetica, Arial, sans-serif;
    }
</style>

<template>
    <div class="container">
        <p>This is a</p>
        <div class="typeButtons">
            <button>A quote</button>
            <button>A thought</button>
        </div>
        <p>From</p>
        <div class="typeButtons">
            <button>A book</button>
            <button>An article</button>
            <button>Other</button>
        </div>
        <textarea col="30" rows="5">
        </textarea>
        <label><p>Book</p><input type="text"></label>
        <label><p>Author</p><input type="text"></label>
        <div style="display: none">
            <p>Extra</p>
            <label><p>Date read:</p><input type="date"></label>
            <label><p>Page: </p><input type="text"></label>
            <label><p>Other</p><input type="text"></label>

        </div>
        <div>
            <button>Add</button>
            <button>Cancel</button>
        </div>

    </div>
</template>

<script>
    export default {
        name: "InputForm"
    }
</script>

