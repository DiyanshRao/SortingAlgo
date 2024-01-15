interface Element {
  value: number
  compare: boolean
  sorted: boolean
  color: string
}

export const insertionSort = (state: Element[]): Element[][] => {
  const arr: Element[] = state.map((objArr) => ({ ...objArr }))
  const history: Element[][] = []

  history.push(
    arr.map((a) => {
      return { ...a }
    })
  )

  for (let i = 1; i < arr.length; i++) {
    let j = i

    while (j > 0) {
      arr[j].color = 'white'
      arr[j - 1].color = 'white'

      history.push(
        arr.map((a) => {
          return { ...a }
        })
      )

      if (arr[j].value < arr[j - 1].value) {
        arr[j].color = '#DC143C'
        arr[j - 1].color = '#DC143C'

        history.push(
          arr.map((a) => {
            return { ...a }
          })
        )

        let temp = arr[j]
        arr[j] = arr[j - 1]
        arr[j - 1] = temp
      } else {
        arr[j].color = '#32CD32'
        arr[j - 1].color = '#32CD32'

        history.push(
          arr.map((a) => {
            return { ...a }
          })
        )
      }

      arr[j].color = '#293451'
      arr[j - 1].color = '#293451'

      history.push(
        arr.map((a) => {
          return { ...a }
        })
      )
      j--
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
