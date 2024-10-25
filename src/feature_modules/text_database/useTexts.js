import { ref as vueRef } from 'vue'
import { textsRef } from './firebase-config'
import { onValue, push } from 'firebase/database'

export function useTexts() {
    const texts = vueRef([])
    const loading = vueRef(true)
    const error = vueRef(null)

    // Listen to changes in the database
    onValue(textsRef, (snapshot) => {
        loading.value = false
        const data = snapshot.val()
        texts.value = data ? 
            Object.entries(data)
                .map(([id, text]) => ({ id, ...text }))
                .reverse() 
            : []
    }, (err) => {
        error.value = err.message
        loading.value = false
    })

    // Add new text
    const addText = async (content) => {
        try {
            await push(textsRef, {
                content,
                timestamp: Date.now()
            })
            error.value = null
        } catch (err) {
            error.value = err.message
        }
    }

    return {
        texts,
        loading,
        error,
        addText
    }
}