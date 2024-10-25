<template>
    <div class="text-viewer">
        <div v-if="loading">Loading...</div>
        <div v-else-if="error">Error: {{ error }}</div>
        <div v-else-if="texts.length === 0">No texts yet</div>
        <div v-else class="texts-list">
            <div 
                v-for="text in texts" 
                :key="text.id"
                class="text-item"
            >
                <p class="content">{{ text.content }}</p>
                <p class="timestamp ps">
                    {{ new Date(text.timestamp).toLocaleString() }}
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useTexts } from './useTexts'

const { texts, loading, error } = useTexts()
</script>

<style scoped>
.text-viewer {
    margin: 20px 0;
}
.text-item {
    padding: 10px;
    border-bottom: 1px solid var(--c3);
}
.timestamp {
    opacity: 0.5;
}
</style>