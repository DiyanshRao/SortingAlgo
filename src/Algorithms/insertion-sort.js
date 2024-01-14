export const insertionSort = (state) => {
  const arr = state.map((objArr) => objArr)
  const history = []

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

      // make it blue
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

  /*  Evert thing done just show 2nd last step as green and last step as default color  */

  // push sorted aray with all green color
  history.push(
    arr.map((a) => {
      return { ...a, color: '#32CD32' }
    })
  )
  // push with default color
  history.push(
    arr.map((a) => {
      return { ...a }
    })
  )

  return history
}
