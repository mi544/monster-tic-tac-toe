<template>
  <div class="home"></div>
  <button @click="connect">Click me</button>
</template>

<script>
// @ is an alias to /src
import { io } from 'socket.io-client'

export default {
  name: 'Home',
  methods: {
    connect() {
      console.log('connecting')
      const socket = io('http://localhost:5005/')
      console.log('socket', socket)
      // // socket.on("bryan", arg => {
      // //   console.log(arg); // world
      // });
    },
  },
}
</script>
