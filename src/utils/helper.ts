import type { Ref } from 'vue'

export const withLoading = async (action: () => Promise<void>, loadingRef: Ref<boolean>) => {
  loadingRef.value = true
  try {
    await action()
  } catch (err) {
    console.error(err)
  } finally {
    loadingRef.value = false
  }
}
