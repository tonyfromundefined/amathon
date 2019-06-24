import styled, { css } from '~/styled'

interface ISectionProps {
  children: React.ReactNode
  background?: string
  padding?: string
}
export default function Section(props: ISectionProps) {
  return (
    <Container background={props.background}>
      <Centered padding={props.padding}>
        {props.children}
      </Centered>
    </Container>
  )
}

interface IContainerProps {
  background?: string
}
const Container = styled.div<IContainerProps>`
  display: flex;
  justify-content: center;

  ${(props) => props.background && css`
    background: ${props.background};
  `}
`

interface ICenteredProps {
  padding?: string
}
const Centered = styled.div<ICenteredProps>`
  width: 100%;
  max-width: ${(props) => props.theme.sectionMaxWidth};
  padding: ${(props) => props.padding || '3.5rem 1.5rem'};
  transition: padding .3s;
`
