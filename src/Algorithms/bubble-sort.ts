interface Element {
  value: number
  compare: boolean
  sorted: boolean
  color: string
}

export const bubbleSort = (state: Element[]): Element[][] => {
  let arr: Element[] = state.map((objArr) => ({ ...objArr }))
  let history: Element[][] = []

  history.push(
    arr.map((a) => {
      return { ...a }
    })
  )

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      arr[j].color = '#89CFF0'
      arr[j + 1].color = '#89CFF0'

      history.push(
        arr.map((a) => {
          return { ...a }
        })
      )

      if (arr[j].value > arr[j + 1].value) {
        arr[j].color = '#DC143C'
        arr[j + 1].color = '#DC143C'

        history.push(
          arr.map((a) => {
            return { ...a }
          })
        )

        var temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      } else {
        arr[j].color = '#32CD32'
        arr[j + 1].color = '#32CD32'

        history.push(
          arr.map((a) => {
            return { ...a }
          })
        )
      }

      arr[j].color = '#293451'
      arr[j + 1].color = '#293451'

      history.push(
        arr.map((a) => {
          return { ...a }
        })
      )
    }
  }

  history.push(
    arr.map((a) => {
      return { ...a, color: '#32CD32' }
    })
  )

  history.push(
    arr.map((a) => {
      return { ...a }
    })
  )
  return history
}
