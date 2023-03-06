import MarkdownIt from 'markdown-it'

import { memo, useMemo } from 'react'
import 'github-markdown-css'


const md = new MarkdownIt({
  html: true,
  linkify: true, // 链接字符串转化为链接
})

function b64_to_utf8(str) {
  return decodeURIComponent(escape(atob(str)))
}

// memo： 只要props没有变化，就不需要渲染
export default memo(function MarkdownRenderer({ content, isBase64 }) {
  const markdown = isBase64 ? b64_to_utf8(content) : content

  const html = useMemo(() => md.render(markdown), [markdown]) // 依赖是markdown

  return (
    <div className="markdown-body">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
})
