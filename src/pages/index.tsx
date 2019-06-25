import AmathonLandscapeImage from '~/assets/amathon-landscape.jpg'
import AusgImage1 from '~/assets/ausg-1.jpg'
import AusgImage2 from '~/assets/ausg-2.jpg'
import AwskrugImage1 from '~/assets/awskrug-1.jpg'
import AwskrugImage2 from '~/assets/awskrug-2.jpg'
import FloatingButton from '~/components/Fragments/FloatingButton'
import ParallaxImage from '~/components/Fragments/ParallaxImage'
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
        <ParallaxImage image={AmathonLandscapeImage} />
        <StoreCore />
        <StoryDetail />
        <StoryPresession />
        <StorySponsors />
        <StorySchedule />
      </div>
      <ParallaxImage image={AwskrugImage1} />
      <ParallaxImage image={AwskrugImage2} />
      <StoryAwskrug />
      <ParallaxImage image={AusgImage1} />
      <ParallaxImage image={AusgImage2} />
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
