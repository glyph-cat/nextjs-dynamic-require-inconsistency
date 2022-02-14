import { Request, Response } from 'express-serve-static-core'
import { renderToStaticMarkup } from 'react-dom/server'
import { RUNTIME_ID } from '../../~constants'
import { DemoContext } from '../../~context'

export default async function handler(
  req: Request,
  res: Response
): Promise<Response> {
  console.log(`Running handler... (RUNTIME_ID is ${RUNTIME_ID})`)
  const { templateName, personName } = req.query
  const Template = require(`../../~templates/${templateName}`).default
  const renderedOutput = renderToStaticMarkup(
    <DemoContext.Provider value={{ name: personName }}>
      <Template />
    </DemoContext.Provider>
  )
  return res.status(200).json({
    renderedOutput,
    RUNTIME_ID,
  })
}
