export const mergeSort = (state) => {
  console.log('merge sort called')
  let history = []
  const arr = state.map((objarr) => objarr)

  // push intitial state
  history.push(
    arr.map((obj) => {
      return { ...obj }
    })
  )

  let startIndex = 0
  let endIndex = arr.length - 1

  // history array is pass by reference by default
  merge_sort(arr, startIndex, endIndex, history)

  // make sorted element green
  history.push(
    arr.map((obj, idx) => {
      return {
        ...obj,
        color: '#32CD32',
      }
    })
  )
  // make it default color
  history.push(
    arr.map((obj, idx) => {
      return {
        ...obj,
      }
    })
  )

  return history
}

function merge_sort(arr, startIndex, endIndex, history) {
  if (startIndex < endIndex) {
    let mid = Math.floor((startIndex + endIndex) / 2)

    merge_sort(arr, startIndex, mid, history)
    merge_sort(arr, mid + 1, endIndex, history)
    merge(arr, startIndex, mid, endIndex, history)
  }
  return
}

function merge(arr, startIndex, mid, endIndex, history) {
  let leftArr = []
  // copy left sorted array
  for (let i = startIndex; i <= mid; i++) {
    leftArr.push({ ...arr[i] })
  }
  // push int  max
  leftArr.push({ value: 999999 })

  let rightArr = []
  // copy right sorted array
  for (let i = mid + 1; i <= endIndex; i++) {
    rightArr.push({ ...arr[i] })
  }
  //push in t max
  rightArr.push({ value: 999999 })

  /* make mid as red color  */
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

  // make it default color
  history.push(
    arr.map((obj, idx) => {
      return {
        ...obj,
      }
    })
  )
}
