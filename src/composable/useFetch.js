import {ref, watch} from "vue";

export function useFetch(url) {
    const state = ref('loading');
    const data = ref(null)

    watch(url, (urlValue) => {
        fetch(urlValue, {
            headers: {
                'Accept': 'application/json',
            }
        })
            .then(r => {
                if (r.ok) {
                    return r.json()
                }
                throw new Error('Impossible de charger les articles depuis le serveur')
            })
            .then(v => {
                data.value = v
                state.value = 'idle'
            })
            .catch(e => {
                state.value = 'error'
            })
    }, { immediate: true });
    return {
        data,
        state,
    }
}