import Fade from 'react-reveal/Fade'
import styled from '~/styled'

interface ITitleProps {
  header: string
  children: React.ReactNode
}
export default function Title(props: ITitleProps) {
  return (
    <Container>
      <Fade delay={250}>
        <Header>{props.header}</Header>
        <Children>{props.children}</Children>
      </Fade>
    </Container>
  )
}

const Container = styled.div`
  margin-bottom: 1.25rem;

  &:last-of-type {
    margin-bottom: 0;
  }
`

const Header = styled.h3`
  font-size: .875rem;
  color: #fff;
  margin: 0 0 .25rem;
`

const Children = styled.div`
  font-size: 1.25rem;
  color: #fff;
  font-weight: 700;
  line-height: 1.4;
`

export const TitleCaption = styled.span`
  font-size: .625em;
  margin-left: .5rem;
`
