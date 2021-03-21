<template>
  <div>
    <div class="flex flex-col justify-center items-center w-screen h-screen font-md">
      <div
        class="flex justify-center items-center h-16 w-16 bg-gray-500"
        v-for="(row, index) in grid"
        :key="`row${index}`"
      >
        <div
          class="flex justify-center items-center cursor-pointer h-16 w-16 bg-gray-500 p-8"
          v-for="cell in row"
          :key="cell.position"
          @click="cellClick(cell.position)"
        >
          {{ cell.mark }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue'
import { getGrid, grid, markCell } from '../game/grid.js'
import { setError, setMessage } from '../game/alert.js'

export default {
  setup() {
    onMounted(() => {
      grid.value = getGrid()
    })
    const cellClick = (position) => {
      const result = markCell(position, 'X')
      if (!result) setError("You can't play here!")
      else setMessage('x played on position 12')
    }
    return {
      grid,
      cellClick,
    }
  },
}
</script>

<style lang="scss"></style>
