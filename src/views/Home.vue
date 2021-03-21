<template>
  <div class="home">
    <button @click="connect">Click me</button>
    <Board />
  </div>
</template>

<script>
// @ is an alias to /src
import { io } from 'socket.io-client'
import Board from '../components/Board.vue'

export default {
  name: 'Home',
  components: {
    Board,
  },
  methods: {
    connect() {
      console.log('connecting')
      const socket = io('http://localhost:5002/')
      console.log('socket', socket)
      socket.on('GAME_START', (arg) => {
        console.log('GAME STARTED!!!', arg)
      })
    },
  },
}
</script>
