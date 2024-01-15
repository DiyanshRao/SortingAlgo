interface Element {
  value: number
  compare: boolean
  sorted: boolean
  color: string
}

export const quickSort = (state: Element[]): Element[][] => {
  const arr: Element[] = state.map((objArr) => ({ ...objArr }))
  const history: Element[][] = []

  history.push(
    arr.map((a) => {
      return { ...a }
    })
  )

  let start = 0
  let end = arr.length - 1

  Quick_sort(arr, start, end, history)

  history.push(
    arr.map((a) => {
      return {
        ...a,
        color: '#32CD32',
      }
    })
  )

  history.push(
    arr.map((a) => {
      return {
        ...a,
      }
    })
  )

  return history
}

function Quick_sort(
  arr: Element[],
  start: number,
  end: number,
  history: Element[][]
) {
  if (start < end) {
    let pMid = partition(arr, start, end, history)
    console.log(pMid)
    Quick_sort(arr, start, pMid - 1, history)
    Quick_sort(arr, pMid + 1, end, history)
  }
  return
}

function partition(
  arr: Element[],
  start: number,
  end: number,
  history: Element[][]
): number {
  let pivot = arr[end].value

  history.push(
    arr.map((a, index) => {
      if (index === arr.length - 1) {
        return {
          color: '#DC143C',
          ...a,
        }
      }
      return { ...a }
    })
  )

  let i = start - 1,
    j = start

  while (j < end) {
    history.push(
      arr.map((a, index) => {
        if (index === j || index === end) {
          return {
            ...a,
            color: 'white',
          }
        }
        return { ...a }
      })
    )

    if (arr[j].value <= pivot) {
      history.push(
        arr.map((a, index) => {
          if (index === j) {
            return {
              ...a,
              color: '#32CD32',
            }
          }
          return { ...a }
        })
      )

      let temp = arr[++i]
      arr[i] = arr[j]
      arr[j] = temp
    }

    history.push(
      arr.map((a, index) => {
        if (index === j) {
          return {
            ...a,
            color: '#DC143C',
          }
        }
        return { ...a }
      })
    )

    j++
  }

  let temp = arr[++i]
  arr[i] = arr[end]
  arr[end] = temp

  history.push(
    arr.map((a, index) => {
      if (index === i) {
        return {
          ...a,
          color: '#32CD32',
        }
      }
      return { ...a }
    })
  )

  return i
}
