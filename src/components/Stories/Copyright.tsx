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
  width: 16.3125rem;
  height: .9375rem;
`
