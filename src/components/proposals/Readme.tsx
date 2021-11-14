import { useEffect, useMemo } from 'react'
import marked from 'marked'
import styled from 'styled-components'
import { SanitizedHtml } from '../common'
import { markdownLightTheme } from '../../theme/light'
import { markdownDarkTheme } from '../../theme/dark'

const Article = styled.article`
  flex: 1;
  max-width: 80%;

  ${({ theme }) => (theme.name === 'light' ? markdownLightTheme : markdownDarkTheme)};

  @media (max-width: 768px) {
    max-width: 100%;
    margin: 0 auto;
  }
`

interface Props {
  readme: string
  baseUrl: string
}

export function Readme({ readme, baseUrl }: Props) {
  useEffect(() => {
    import('highlight.js').then((hljs) => {
      hljs.default.highlightAll()
    })
  }, [])

  const html = useMemo(() => marked(readme, { baseUrl }), [readme, baseUrl])

  return (
    <Article>
      <SanitizedHtml className="markdown-body" html={html} />
    </Article>
  )
}
