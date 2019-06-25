import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Fade from 'react-reveal/Fade'
import styled, { media } from '~/styled'
import Section from '../System/Section'

export default function StoryAwskrug() {
  return (
    <Section id='awskrug'>
      <Fade bottom distance='1rem'>
        <Title>AWSKRUG</Title>
      </Fade>
      <Fade bottom distance='1rem'>
        <Subtitle>AWS 한국 사용자 모임</Subtitle>
      </Fade>
      <Fade bottom distance='1rem'>
        <Paragraph>
          AWSKRUG는 2012년 시작된 Amazon Web Services의 한국 사용자모임으로서,
          AWS 클라우드를 처음 배우는 분들부터 고급 개발자까지 정보 교류를 위해 만들어졌습니다.
          각종 반기 및 월간 세미나, 지역별 분야별 소모임 그리고 글로벌 유저그룹 연계 활동 등
          다양한 프로젝트를 수행하고 있습니다.
        </Paragraph>
      </Fade>
      <Fade bottom distance='1rem'>
        <ActivitiesTitle>주요 활동</ActivitiesTitle>
      </Fade>
      <Fade bottom distance='1rem'>
        <Activities>
          <Activity>국내 AWS 학습 및 정보 공유 모임</Activity>
          <Activity>AWS Korea와의 협력활동</Activity>
          <Activity>AWS re:invent 등의 행사활동</Activity>
          <Activity>해외 AWS 모임과의 교류활동</Activity>
        </Activities>
      </Fade>
      <Fade bottom distance='1rem'>
        <SocialButtons>
          <SocialButton background='#364FC7'>
            <FontAwesomeIcon icon={['fab', 'facebook-f']} />
          </SocialButton>
          <SocialButton background='#12B886'>
            <FontAwesomeIcon icon={['fab', 'slack']} />
          </SocialButton>
          <SocialButton background='#E64980'>
            <FontAwesomeIcon icon={['fab', 'meetup']} />
          </SocialButton>
        </SocialButtons>
      </Fade>
    </Section>
  )
}

export const Title = styled.h1`
  color: #fff;
  margin: 0 0 1rem;
  font-size: 1.9125rem;
`

export const Subtitle = styled.h3`
  color: #fff;
  margin: 0 0 2rem;
  font-size: 1.125rem;
`

export const Paragraph = styled.div`
  font-size: 1.375rem;
  font-weight: 700;
  color: #fff;
  line-height: 1.5;
  margin: 0;
  word-break: keep-all;
  margin-bottom: 3rem;
`

export const ActivitiesTitle = styled.div`
  color: #fff;
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: .75rem;
`

export const Activities = styled.ul`
  margin: 0;
  padding: 0 0 0 1.375rem;
  margin: 0 0 3rem;
`

export const Activity = styled.li`
  font-size: 1.375rem;
  font-weight: 700;
  color: #fff;
  line-height: 1.77;
  word-break: keep-all;
`

export const SocialButtons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1.5rem;

  ${media.lessThan('medium')`
    display: block;
  `}
`

interface ISocialButtonProp {
  background: string
}
export const SocialButton = styled.a<ISocialButtonProp>`
  background-color: ${(props) => props.background};
  display: flex;
  color: #fff;
  height: 5rem;
  align-items: center;
  justify-content: center;
  border-radius: .5rem;
  font-size: 2rem;
  cursor: pointer;
  transition: transform .2s;

  &:active {
    transform: scale(.95);
  }

  ${media.lessThan('medium')`
    margin-bottom: 1.5rem;

    &:last-of-type {
      margin-bottom: 0;
    }
  `}
`
