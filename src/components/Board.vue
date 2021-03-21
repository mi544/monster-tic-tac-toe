<template>
  <div>
    <div class="flex flex-col justify-center items-center w-screen h-screen font-md">
      <div
        class="flex justify-center items-center h-16 w-16 bg-gray-500"
        v-for="(row, index) in grid"
        :key="`row${index}`"
      >
        <div
          class="flex justify-center items-center h-16 w-16 bg-gray-500 p-8"
          v-for="cell in row"
          :key="cell.position"
          @click="cellClick(cell.position)"
        >
          {{ cell.position }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue'
import { getGrid, grid } from '../game/grid.js'

export default {
  setup() {
    onMounted(() => {
      grid.value = getGrid()
    })
    const cellClick = (position) => {
      console.log(position)
    }
    return {
      grid,
      cellClick,
    }
  },
}
</script>

<style lang="scss"></style>
