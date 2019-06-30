import { useState } from 'react'
import Fade from 'react-reveal/Fade'
import Example from '~/assets/story-sponsors-example.svg'
import styled, { css, media } from '~/styled'
import Button from '../System/Button'
import Section from '../System/Section'
import { Column, Columns } from './Detail'

type RewardType =
  'platinum' |
  'gold'

export default function StorySponsors() {
  const [activeRewardType, setActiveRewardType] = useState<RewardType>('platinum')

  const onPlatinumClick = () => {
    setActiveRewardType('platinum')
  }

  const onGoldClick = () => {
    setActiveRewardType('gold')
  }

  return (
    <Section>
      <Container>
        <Columns>
          <Column>
            <Fade bottom distance='1rem'>
              <Title>후원사</Title>
            </Fade>
            <SponsorContainer>
              <SponsorType dotBackground='linear-gradient(to bottom, #C6CCD2, #9BA3AD)'>
                Platinum
              </SponsorType>
              <Fade bottom distance='1rem'>
                <Sponsors>
                  <BigSponsor src={Example} />
                </Sponsors>
              </Fade>
            </SponsorContainer>
            <SponsorContainer>
              <SponsorType dotBackground='linear-gradient(to bottom, #F59F00, #C78100)'>
                Gold
              </SponsorType>
              <Fade bottom distance='1rem'>
                <Sponsors>
                  <SmallSponsor src={Example} />
                  <SmallSponsor src={Example} />
                  <SmallSponsor src={Example} />
                </Sponsors>
              </Fade>
            </SponsorContainer>
          </Column>
          <Column>
            <Fade bottom distance='1rem'>
              <Title>후원사 혜택</Title>
            </Fade>
            <Fade bottom distance='1rem'>
              <RewardTitles>
                  <RewardTitle
                    isActivated={activeRewardType === 'platinum'}
                    onClick={onPlatinumClick}
                  >
                    Platinum
                  </RewardTitle>
                  <RewardTitle
                    isActivated={activeRewardType === 'gold'}
                    onClick={onGoldClick}
                  >
                    Gold
                  </RewardTitle>
              </RewardTitles>
            </Fade>
            {activeRewardType === 'platinum' &&
              <Fade bottom distance='1rem'>
                <Rewards>
                  개별 홍보 시간, 행사 내 부스<br />
                  해커톤 주제 및 취업 연계 트랙 운영<br />
                  현수막 로고, X Banner 로고, 홈페이지 로고 노출
                </Rewards>
              </Fade>
            }
            {activeRewardType === 'gold' &&
              <Fade bottom distance='1rem'>
                <Rewards>
                  개별 홍보 시간<br />
                  현수막 로고, X Banner 로고, 홈페이지 로고 노출
                </Rewards>
              </Fade>
            }
            <Fade bottom distance='1rem'>
              <Button
                background='#1C7ED6'
                icon={['fas', 'rocket']}
                label='Amathon 후원사로 참여하기'
              />
            </Fade>
          </Column>
        </Columns>
      </Container>
    </Section>
  )
}

const Container = styled.div`
  ${media.lessThan('medium')`
    text-align: center;
  `}
`

const Title = styled.h3`
  margin: 0;
  font-size: .875rem;
  color: #fff;
  font-weight: 700;
  margin-bottom: 1.5rem;
`

const SponsorContainer = styled.div`
  margin-bottom: 3rem;

  &:last-of-type {
    margin-bottom: 0;
  }
`

interface ISponsorTypeProps {
  dotBackground: string
}
const SponsorType = styled.div<ISponsorTypeProps>`
  padding-left: 1rem;
  color: #fff;
  position: relative;
  font-weight: 700;
  margin-bottom: 1rem;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    width: .5rem;
    height: .5rem;
    border-radius: .25rem;
    background: ${(props) => props.dotBackground || props.theme.gray[7]};
    transform: translateY(-50%);
  }
`

const Sponsors = styled.div``

const BigSponsor = styled.img`
  height: 4.375rem;
`

const SmallSponsor = styled.img`
  display: inline-block;
  height: 2rem;
  margin-right: 2rem;
  margin-bottom: 1.75rem;
`

const RewardTitles = styled.div``

interface IRewardTitleProps {
  isActivated?: boolean
}
const RewardTitle = styled.div<IRewardTitleProps>`
  color: #fff;
  cursor: pointer;
  font-weight: 700;
  font-size: 1rem;
  display: inline-block;
  margin-right: 2rem;
  transition: opacity .2s;

  &:last-of-type {
    margin-right: 0;
  }

  ${(props) => !props.isActivated && css`
    opacity: .3;

    &:hover {
      opacity: .5;
    }
  `}
`

const Rewards = styled.div`
  font-size: 1.125rem;
  color: #fff;
  font-weight: 700;
  margin-top: 1.5rem;
  line-height: 1.5;
  margin-bottom: 1.5rem;
`
