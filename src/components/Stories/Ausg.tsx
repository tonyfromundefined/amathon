import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Fade from 'react-reveal/Fade'
import Section from '../System/Section'
import {
  Activities,
  ActivitiesTitle,
  Activity,
  Paragraph,
  SocialButton,
  SocialButtons,
  Subtitle,
  Title,
} from './Awskrug'

export default function StoryAusg() {
  return (
    <Section id='ausg'>
      <Fade bottom distance='1rem'>
        <Title>AUSG</Title>
      </Fade>
      <Fade bottom distance='1rem'>
        <Subtitle>AWSKRUG 대학생 모임</Subtitle>
      </Fade>
      <Fade bottom distance='1rem'>
        <Paragraph>
          AUSG는 2017년에 시작된 AWSKRUG 내 대학생 소모임으로서,
          최신 소프트웨어 기술과 클라우드에 대한 이해를 바탕으로
          AWS를 학습하고 전파하는데 집중하고 있습니다.
        </Paragraph>
      </Fade>
      <Fade bottom distance='1rem'>
        <ActivitiesTitle>주요 활동</ActivitiesTitle>
      </Fade>
      <Fade bottom distance='1rem'>
        <Activities>
          <Activity>AUSG 멤버들의 AWS 학습을 위한 교육 세션</Activity>
          <Activity>AWS 학습의 응용을 위한 팀 별 프로젝트 진행</Activity>
          <Activity>AWS 전파를 위한 세미나 주최</Activity>
          <Activity>외부 대학생 대상 AWS교육</Activity>
          <Activity>AWS와 AWSKRUG의 공식행사 서포트</Activity>
          <Activity>AWSKRUG의 #ausg 채널 및 모임 운영</Activity>
          <Activity>해외유저그룹 행사 및 AWS 공식행사 참여</Activity>
        </Activities>
      </Fade>
      <Fade bottom distance='1rem'>
        <SocialButtons>
          <SocialButton
            background='#364FC7'
            href='https://www.facebook.com/ausgkr/'
            target='_blank'
          >
            <FontAwesomeIcon icon={['fab', 'facebook-f']} />
          </SocialButton>
        </SocialButtons>
      </Fade>
    </Section>
  )
}
