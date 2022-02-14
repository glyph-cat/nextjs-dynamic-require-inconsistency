import { useContext } from 'react'
import { RUNTIME_ID } from '../~constants'
import { DemoContext } from '../~context'

export default function Goodbye(): JSX.Element {
  console.log(`Rendering template... (RUNTIME_ID is ${RUNTIME_ID})`)
  const { name } = useContext(DemoContext)
  return (
    <>
      Goodbye, {name}. (RUNTIME_ID is {RUNTIME_ID})
    </>
  )
}
