import InSeoulImage from '~/assets/story-copyright-in-seoul.svg'
import LabelImage from '~/assets/story-copyright-label.svg'
import styled from '~/styled'
import Section from '../System/Section'

export default function StoryCopyright() {
  return (
    <Section>
      <Labels>
        <LabelContainer
          href='https://github.com/tonyfromundefined'
          target='_blank'
        >
          <Label src={LabelImage} />
        </LabelContainer>
        <InSeoul src={InSeoulImage} />
      </Labels>
    </Section>
  )
}

const Labels = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const LabelContainer = styled.a`
  display: inline-block;
  height: .9375rem;
  opacity: .4;
  transition: opacity .4s;

  &:hover {
    opacity: 1;
  }
`

const Label = styled.img`
  width: 9.0625rem;
  height: .9375rem;
`

const InSeoul = styled.img`
  width: 3.125rem;
  height: .75rem;
  opacity: .2;
`
