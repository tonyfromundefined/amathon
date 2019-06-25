import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import styled, { css, keyframes, media } from '~/styled'

export default function FloatingRegistrationButton() {
  const [isScrolled, setIsScrolled] = useState(false)

  const onScroll = () => {
    if (window.scrollY < 150) {
      setIsScrolled(false)

    } else if (!isScrolled) {
      setIsScrolled(true)

    }
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <Container>
      <Button isScrolled={isScrolled}>
        <ButtonLabels>
          <FontAwesomeIcon icon={['fas', 'rocket']} />
          참가 신청하기
        </ButtonLabels>
        <ButtonSafeAreaSpace isScrolled={isScrolled} />
      </Button>
      <Arrow isScrolled={isScrolled}>
        <FontAwesomeIcon icon={['fal', 'angle-down']} />
      </Arrow>
    </Container>
  )
}

const Container = styled.div`
  display: none;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 1000;

  ${media.lessThan('medium')`
    display: block;
  `}
`

interface IButtonProps {
  isScrolled: boolean
}
const Button = styled.div<IButtonProps>`
  box-shadow: 0 .5rem 1rem 0 rgba(0, 0, 0, .25);
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
  border-radius: .375rem;
  cursor: pointer;
  padding: 1rem;
  background-color: #1E3AC6;
  margin: 1.5rem 1.5rem 3rem;
  transition: border-radius .4s, margin .4s, transform .2s;

  svg {
    margin-right: .3em;
  }

  ${(props) => !props.isScrolled && css`
    &:active {
      transform: scale(.95);
    }
  `}

  ${(props) => props.isScrolled && css`
    margin: 0;
    padding: 1rem;
    border-radius: 0;
  `}
`

const ButtonLabels = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

interface IButtonSafeAreaSpaceProps {
  isScrolled: boolean
}
const ButtonSafeAreaSpace = styled.div<IButtonSafeAreaSpaceProps>`
  transition: padding-bottom .4s;

  ${(props) => props.isScrolled && css`
    padding-bottom: env(safe-area-inset-bottom);
  `}
`

const ArrowAnimation = keyframes`
  0% {
    transform: translate(-50%, -.25rem);
  }

  50% {
    transform: translate(-50%, 0);
  }

  100% {
    transform: translate(-50%, -.25rem);
  }
`

interface IArrowProps {
  isScrolled: boolean
}
const Arrow = styled.div<IArrowProps>`
  animation: ${ArrowAnimation} 1s ease-in-out infinite;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  font-size: 2.5rem;
  color: rgba(255, 255, 255, .2);
  opacity: 1;
  transition: opacity .4s;

  ${(props) => props.isScrolled && css`
    opacity: 0;
  `}
`
