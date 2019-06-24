import Fade from 'react-reveal/Fade'
import AmathonLogoImage from '~/assets/story-about-amathon-logo.svg'
import styled from '~/styled'
import Section from '../Section'

export default function StoryCore() {
  return (
    <Section background='radial-gradient(circle at bottom, #2D343B, #2A2D2F)'>
      <AmathonLogoContainer>
        <Fade bottom distance='1rem'>
          <AmathonLogo src={AmathonLogoImage} />
        </Fade>
      </AmathonLogoContainer>
      <Paragraph>
        <Fade bottom distance='1rem'>
          해커톤이란 해킹(Hacking)과 마라톤(Marathon)의 합성어로,
          기획자 디자이너 개발자가 한 팀을 이뤄, 마치 마라톤을 하는 것처럼 하루 동안 쉬지 않고
          아이디어를 프로그래밍 과정을 통하여 결과물을 만들어 내는 활동입니다.
          하지만 한국에서는 공모전의 일종으로 수상을 하기 위한 하나의 이벤트로서 많이 변질하여 왔습니다.
          AUSG는 해커톤이 프로페셔널한 사람들이 모여서 수상을 하기 위한 경쟁의 도구가 아니라
          초보자라도 클라우드에 대해서 편안하게 접할 수 있고, 현업에서 사용하는 도구와 기술들을 만나보며
          학업과 현업의 거리를 줄이려는 행사를 위하여 Amathon을 기획하게 되었습니다.
        </Fade>
      </Paragraph>
    </Section>
  )
}

const AmathonLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0 8rem;
`

const AmathonLogo = styled.img`
  width: 2.875rem;
  height: 1.625rem;
`

const Paragraph = styled.div`
  font-size: 1.375rem;
  font-weight: 700;
  color: #fff;
  line-height: 1.66;
  margin: 0;
  word-break: keep-all;
`
