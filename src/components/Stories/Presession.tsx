import Fade from 'react-reveal/Fade'
import LogoImage from '~/assets/story-presession-logo.svg'
import styled, { media } from '~/styled'
import Button from '../System/Button'
import Section from '../System/Section'
import Title, { TitleCaption } from '../System/Title'
import { Column, Columns } from './Detail'

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
        />
      </LogoContainer>
      <Columns>
        <Column>
          <Titles>
            <Title header='주최'>
              AWSKRUG<TitleCaption>AWS 한국 사용자 모임</TitleCaption>
            </Title>
            <Title header='일정'>
              7월 19일 (목)
            </Title>
            <Title header='시간'>
              19:00 ~ 21:00
            </Title>
            <Title header='대상'>
              Amathon 지원자 전원
            </Title>
            <Title header='장소'>
              GS타워 12층
            </Title>
          </Titles>
        </Column>
        <Column>
          <Sessions>
            <Session>
              <SessionAvatar />
              <SessionTitle>Serverless Crawling & Data Analysis</SessionTitle>
              <SessionName>Movilest CTO, 변규현</SessionName>
            </Session>
            <Session>
              <SessionAvatar />
              <SessionTitle>Serverless Framework으로 SPA 배포하기</SessionTitle>
              <SessionName>이리온컴퍼니 CTO, 원지혁</SessionName>
            </Session>
            <Session>
              <SessionAvatar />
              <SessionTitle>AWS를 사용해 Django 웹 서버 구축하기</SessionTitle>
              <SessionName>AUSG, 김현중</SessionName>
            </Session>
            <Session>
              <SessionAvatar />
              <SessionTitle>SageMaker로 MNIST 머신러닝 맛보기</SessionTitle>
              <SessionName>AUSG, 남궁선</SessionName>
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
  background: ${(props) => props.avatarUrl ? `url(${props.avatarUrl})` : props.theme.gray[8]};
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
