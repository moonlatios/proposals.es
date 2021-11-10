import { GetStaticProps } from 'next'
import { Heading, PageContainer } from '../../components/common'
import { StageList } from '../../components/stages/StageList'
import { allStages } from '../../types'
import { Disclaimer } from '../../components/common/Disclaimer'

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {}
  }
}

export default function StagesPage() {
  return (
    <PageContainer width="80%" margin="0 auto">
      <Heading>Stages</Heading>
      <StageList stages={[...allStages].reverse()} />
      <Disclaimer>
        These descriptions are gathered from{' '}
        <a href="https://github.com/tc39/proposals">tc39/proposals on GitHub</a> and the
        official <a href="https://tc39.es/process-document/">TC39 process document.</a>
      </Disclaimer>
    </PageContainer>
  )
}
