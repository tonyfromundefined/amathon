import Fade from 'react-reveal/Fade'
import LogoImage from '~/assets/story-presession-logo.svg'
import styled, { media } from '~/styled'
import Button from '../System/Button'
import Section from '../System/Section'
import Title, { TitleCaption } from '../System/Title'
import { Column, Columns } from './Detail'
import AvatarImage1 from '~/assets/story-presession-avatar-1.jpg'
import AvatarImage2 from '~/assets/story-presession-avatar-2.jpg'
import AvatarImage3 from '~/assets/story-presession-avatar-3.jpg'
import AvatarImage4 from '~/assets/story-presession-avatar-4.jpg'

export default function StoryPresession() {
  return (
    <Section background='radial-gradient(circle at bottom, #3A4B5C, #2A2E32)'>
      <Advertise>참가신청만 하면 무료 AWS 세션을 덤으로</Advertise>
      <LogoContainer>
        <Fade bottom delay={250} distance='1rem'>
          <Logo src={LogoImage} />
        </Fade>
        <Fade bottom delay={500} distance='1rem'>
          <LogoCaption>
            Amathon에 참가하기 전에, 미리 AWS를 경험해보세요
          </LogoCaption>
        </Fade>
        <Button
          background='#2F9E44'
          icon={['fas', 'rocket']}
          label='참가 신청하기'
          href='https://forms.gle/SQWyoTfRBhULggRx8'
        />
      </LogoContainer>
      <Columns>
        <Column>
          <Titles>
            <Title header='주최'>
              AUSG<TitleCaption>AWSKRUG 대학생 모임</TitleCaption>
            </Title>
            <Title header='일정'>
              8월 22일 (목)
            </Title>
            <Title header='시간'>
              19:00 ~ 21:00
            </Title>
            <Title header='대상'>
              Amathon 지원자 전원
            </Title>
            <Title header='장소'>
              강남구 논현로 508 GS타워 12층 (AWS)<br />
              강남구 논현로85길 46, 2층 (메가존)
            </Title>
          </Titles>
        </Column>
        <Column>
          <Sessions>
            <Session>
              <SessionAvatar avatarUrl={AvatarImage1} />
              <SessionTitle>Amplify로 풀사이클 개발 체험하기</SessionTitle>
              <SessionName>AUSG 2기, 고명진</SessionName>
            </Session>
            <Session>
              <SessionAvatar avatarUrl={AvatarImage2} />
              <SessionTitle>Serverless Framework으로 React 배포하기</SessionTitle>
              <SessionName>이리온컴퍼니 CTO, 원지혁</SessionName>
            </Session>
            <Session>
              <SessionAvatar avatarUrl={AvatarImage3} />
              <SessionTitle>CircleCI + ElasticBeanstalk을 활용한 React 배포 자동화</SessionTitle>
              <SessionName>AUSG 1기, 윤서현</SessionName>
            </Session>
            <Session>
              <SessionAvatar avatarUrl={AvatarImage4} />
              <SessionTitle>클라우드 컨테이너 환경에서 Back-end API 구성하기 AtoZ</SessionTitle>
              <SessionName>AUSG 2기, 고윤호</SessionName>
            </Session>
          </Sessions>
        </Column>
      </Columns>
    </Section>
  )
}

const Advertise = styled.div`
  color: #fff;
  font-size: 1.25rem;
  font-weight: 700;
  text-align: center;
  margin: 0 0 4rem;
`

const LogoContainer = styled.div`
  text-align: center;
  margin-bottom: 4.75rem;
`

const Logo = styled.img`
  display: inline-block;
  width: 16.5625rem;
  height: 1.6875rem;
`

const LogoCaption = styled.div`
  color: #fff;
  font-weight: 700;
  text-align: center;
  margin: .5rem 0 1.25rem;
  word-break: keep-all;
  line-height: 1.5;
`

const Titles = styled.div`
  ${media.lessThan('medium')`
    text-align: center;
  `}
`

const Sessions = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  ${media.lessThan('medium')`
    position: relative;
    top: 0;
    transform: none;
  `}
`

const Session = styled.div`
  padding-left: 4rem;
  position: relative;
  margin-bottom: 2rem;

  &:last-of-type {
    margin-bottom: 0;
  }
`

interface ISessionAvatarProps {
  avatarUrl?: string
}
const SessionAvatar = styled.div<ISessionAvatarProps>`
  width: 3rem;
  height: 3rem;
  background-image: ${(props) => props.avatarUrl ? `url(${props.avatarUrl})` : props.theme.gray[8]};
  background-size: cover;
  background-position: 50% 50%;
  border-radius: 1.5rem;
  position: absolute;
  top: 0;
  left: 0;
`

const SessionTitle = styled.div`
  font-size: 1.125rem;
  color: #fff;
  font-weight: 700;
  padding-top: .125rem;
  word-break: keep-all;
  line-height: 1.33;
`

const SessionName = styled.div`
  font-size: .875rem;
  color: #fff;
  font-weight: 700;
  margin-top: .25rem;
`
