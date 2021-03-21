import { ref } from 'vue'

const grid = ref([])

const getGrid = () => [
  [
    { position: '00', mark: null },
    { position: '01', mark: null },
    { position: '02', mark: null },
  ],
  [
    { position: '10', mark: null },
    { position: '11', mark: null },
    { position: '12', mark: null },
  ],
  [
    { position: '20', mark: null },
    { position: '21', mark: null },
    { position: '22', mark: null },
  ],
]

const markCell = (position, newMark) => {
  const row = position[0]
  const col = position[1]
  if (grid.value[row][col].mark !== null) return null
  grid.value[row][col].mark = newMark
  return true
}

export { getGrid, grid, markCell }
