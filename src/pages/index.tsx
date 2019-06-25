import FloatingButton from '~/components/Fragments/FloatingButton'
import Top from '~/components/Fragments/Top'
import StoryAusg from '~/components/Stories/Ausg'
import StoryAwskrug from '~/components/Stories/Awskrug'
import StoryCopyright from '~/components/Stories/Copyright'
import StoreCore from '~/components/Stories/Core'
import StoryDetail from '~/components/Stories/Detail'
import StoryHero from '~/components/Stories/Hero'
import StoryPresession from '~/components/Stories/Presession'
import StorySchedule from '~/components/Stories/Schedule'
import StorySponsors from '~/components/Stories/Sponsors'
import styled, { media } from '~/styled'

export default function PageIndex() {
  return (
    <Container>
      <Top />
      <StoryHero />
      <div id='amathon'>
        <StoreCore />
        <StoryDetail />
        <StoryPresession />
        <StorySponsors />
        <StorySchedule />
      </div>
      <StoryAwskrug />
      <StoryAusg />
      <StoryCopyright />
      <FloatingButton />
    </Container>
  )
}

const Container = styled.div`
  transition: padding .4s, margin .4s;

  ${media.lessThan('medium')`
    padding-bottom: 3.125rem;
    margin-bottom: env(safe-area-inset-bottom);
  `}
`
