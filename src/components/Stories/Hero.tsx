import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import Fade from 'react-reveal/Fade'
import BackgroundImage from '~/assets/story-hero-background.svg'
import styled, { keyframes, media } from '~/styled'
import Button from '../Button'

export default function StoryHero() {
  const [height, setHeight] = useState(0)

  useEffect(() => {
    setHeight(window.innerHeight)
  }, [])

  return (
    <Background height={height}>
      <HeroSection>
        <HeroSectionCentered>
          <Headers>
            <Header>
              <Fade bottom distance='1rem'>
                {'2019년에도'}
                {'Amathon은 계속됩니다'}
              </Fade>
            </Header>
            <Subheader>
              <Fade delay={250} bottom distance='1rem'>
                {'AWSKRUG가 만든 클라우드 Hackathon.'}
                {'새로운 사람들과 함께 떠올린 미래를'}
                {'나만의 클라우드 기술로 실현시키세요'}
              </Fade>
            </Subheader>
            <Fade delay={500} bottom>
              <Button
                icon={['fas', 'rocket']}
                label='참가 신청하기'
              />
            </Fade>
          </Headers>
        </HeroSectionCentered>
      </HeroSection>
      <Arrow>
        <FontAwesomeIcon icon={['fal', 'angle-down']} />
      </Arrow>
    </Background>
  )
}

interface IBackgroundProps {
  height: number
}
const Background = styled.div<IBackgroundProps>`
  background: url(${BackgroundImage});
  background-size: cover;
  background-position: 50% 50%;
  height: ${(props) => props.height ? `${props.height}px` : '100vh'};
  min-height: 40rem;
  padding-top: 5.625rem;
  position: relative;

  ${media.lessThan('medium')`
    padding-bottom: 7.75rem;
  `}
`

const HeroSection = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
`

const HeroSectionCentered = styled.div`
  width: 100%;
  max-width: ${(props) => props.theme.sectionMaxWidth};
  position: relative;
  height: 100%;
`

const Headers = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  width: 100%;
  padding: 1.5rem;
`

const Header = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: #fff;
  line-height: 1.33;
  margin: 0 0 1.75rem;
  word-break: keep-all;

  ${media.lessThan('medium')`
    font-size: 2.5rem;
  `}
`

const Subheader = styled.div`
  font-size: 1.35rem;
  font-weight: 700;
  margin: 0 0 1.5rem;
  color: #fff;
  line-height: 1.66;

  ${media.lessThan('medium')`
    font-size: 1rem;
  `}
`

const ArrowAnimation = keyframes`
  0% {
    transform: translate(-50%, -.75rem);
  }

  50% {
    transform: translate(-50%, 0);
  }

  100% {
    transform: translate(-50%, -.75rem);
  }
`

const Arrow = styled.div`
  animation: ${ArrowAnimation} 1s ease-in-out infinite;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  font-size: 2.5rem;
  color: rgba(255, 255, 255, .2);

  ${media.lessThan('medium')`
    display: none;
  `}
`
