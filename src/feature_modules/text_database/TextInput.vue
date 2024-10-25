<template>
    <div class="text-input">
        <input 
            v-model="newText"
            type="text"
            placeholder="Enter your text..."
            @keyup.enter="handleSubmit"
        />
        <button class="contained"
            @click="handleSubmit"
            :disabled="!newText.trim()"
        >
            +
        </button>
        <div v-if="error" class="error">
            {{ error }}
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useTexts } from './useTexts'

const { addText, error } = useTexts()
const newText = ref('')

const handleSubmit = async () => {
    if (!newText.value.trim()) return
    await addText(newText.value)
    newText.value = ''
}
</script>

<style scoped>
.text-input {
    margin: 20px 0;
    display: flex;
    gap: 10px;
}

button:disabled {
    transition: 0.5s;
    opacity: 0;
}
.error {
    color: red;
    margin-top: 8px;
}
</style>