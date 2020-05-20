import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import codeStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark'

import Image from './image'

export function InlineCode({ value }) {
  return <code className="inline-code">{value}</code>
}

export function CodeBlock({ language, value }) {
  return (
    <div className="mb-10">
      <SyntaxHighlighter language={language} style={codeStyle}>
        {value}
      </SyntaxHighlighter>
    </div>
  )
}

export function MarkdownImage({ alt, src }) {
  return (
    <Image
      key={src}
      alt={alt}
      src={require(`../content/assets/${src}`)}
      previewSrc={require(`../content/assets/${src}?lqip`)}
      className="w-full"
    />
  )
}
