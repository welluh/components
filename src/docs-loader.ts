import { loader as WebpackLoader } from 'webpack'

export default function loader (this: WebpackLoader.LoaderContext, content: string) {
  this.callback(null, `export default function (Component) {
      Component.options.__docs = ${JSON.stringify(content)}`
  )
}
