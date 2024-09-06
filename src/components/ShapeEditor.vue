<template>
    <h3>Edit Border Variables</h3>
    <input></input><br>
    <input></input><br>
    <br>
    <h3>Edit Padding Variables</h3>
    <input></input><br>
    <input></input><br>
    <br>
    <button>button</button>
    <div class="contained textbox ">Some text for my textbox.</div>
    <div class="box">This is my box with some text, it has 200px width.   </div>
    <div class="contained">Some contained content</div>
</template>

<script setup>

</script>

<style scoped>
.box{
    display: inline-block;
    width: 200px;
    padding: var(--pad0) var(--pad1);
    border: 1px solid var(--c3);
    border-radius: var(--r0);
}

.textbox{
    display: inline-block;
}

</style>