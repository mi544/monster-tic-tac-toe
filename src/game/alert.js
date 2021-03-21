import { ref } from 'vue'

const error = ref('')
const messages = ref([])

const setError = (newError) => {
  console.log('SETTING AN ERROR YWWWWWHHAAA', newError)
  error.value = newError
  setTimeout(() => (error.value = ''), 5 * 1000)
}

const setMessage = (newMessage) => {
  messages.value.push(newMessage)
}

export { error, setError, setMessage, messages }
