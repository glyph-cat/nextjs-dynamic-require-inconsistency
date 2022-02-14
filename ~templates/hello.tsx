import { useContext } from 'react'
import { RUNTIME_ID } from '../~constants'
import { DemoContext } from '../~context'

export default function Hello(): JSX.Element {
  console.log(`Rendering template... (RUNTIME_ID is ${RUNTIME_ID})`)
  const { name } = useContext(DemoContext)
  return (
    <>
      Hello, {name}. (RUNTIME_ID is {RUNTIME_ID})
    </>
  )
}
