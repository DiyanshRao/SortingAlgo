interface Element {
  value: number
  compare: boolean
  sorted: boolean
  color: string
}

export const mergeSort = (state: Element[]): Element[][] => {
  console.log('merge sort called')
  let history: Element[][] = []
  const arr: Element[] = state.map((objarr) => ({ ...objarr }))

  history.push(
    arr.map((obj) => {
      return { ...obj }
    })
  )

  let startIndex = 0
  let endIndex = arr.length - 1

  merge_sort(arr, startIndex, endIndex, history)

  history.push(
    arr.map((obj, idx) => {
      return {
        ...obj,
        color: '#32CD32',
      }
    })
  )

  history.push(
    arr.map((obj, idx) => {
      return {
        ...obj,
      }
    })
  )

  return history
}

function merge_sort(
  arr: Element[],
  startIndex: number,
  endIndex: number,
  history: Element[][]
) {
  if (startIndex < endIndex) {
    let mid = Math.floor((startIndex + endIndex) / 2)

    merge_sort(arr, startIndex, mid, history)
    merge_sort(arr, mid + 1, endIndex, history)
    merge(arr, startIndex, mid, endIndex, history)
  }
  return
}

function merge(
  arr: Element[],
  startIndex: number,
  mid: number,
  endIndex: number,
  history: Element[][]
) {
  let leftArr: Element[] = []

  for (let i = startIndex; i <= mid; i++) {
    leftArr.push({ ...arr[i] })
  }

  leftArr.push({ value: 999999, compare: false, sorted: false, color: '' })

  let rightArr: Element[] = []

  for (let i = mid + 1; i <= endIndex; i++) {
    rightArr.push({ ...arr[i] })
  }

  rightArr.push({ value: 999999, compare: false, sorted: false, color: '' })

  history.push(
    arr.map((obj, idx) => {
      if (idx === mid) {
        return {
          ...obj,
          color: 'red',
        }
      } else if (idx >= startIndex && idx <= endIndex) {
        return {
          ...obj,
          color: 'green',
        }
      }
      return { ...obj }
    })
  )

  let i = 0,
    j = 0,
    index = startIndex

  while (index <= endIndex) {
    if (leftArr[i].value <= rightArr[j].value) {
      arr[index++] = leftArr[i++]
    } else {
      arr[index++] = rightArr[j++]
    }
  }

  history.push(
    arr.map((obj, idx) => {
      return {
        ...obj,
      }
    })
  )
}
