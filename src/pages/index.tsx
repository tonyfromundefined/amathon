import FloatingRegistrationButton from '~/components/FloatingRegistrationButton'
import StoreCore from '~/components/Stories/Core'
import StoryDetail from '~/components/Stories/Detail'
import StoryHero from '~/components/Stories/Hero'
import StoryPresession from '~/components/Stories/Presession'
import StorySchedule from '~/components/Stories/Schedule'
import StorySponsors from '~/components/Stories/Sponsors'
import Top from '~/components/Top'
import styled, { media } from '~/styled'

export default function PageIndex() {
  return (
    <Container>
      <FloatingRegistrationButton />
      <Top />
      <StoryHero />
      <StoreCore />
      <StoryDetail />
      <StoryPresession />
      <StorySponsors />
      <StorySchedule />
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
