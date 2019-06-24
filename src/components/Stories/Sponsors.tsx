import { useState } from 'react'
import MegazoneImage from '~/assets/story-sponsors-megazone.png'
import styled, { css, media } from '~/styled'
import Button from '../Button'
import Section from '../Section'
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
            <Title>후원사</Title>
            <SponsorType dotBackground='linear-gradient(to bottom, #C6CCD2, #9BA3AD)'>
              Platinum
            </SponsorType>
            <Sponsors>
              <BigSponsor src={MegazoneImage} />
            </Sponsors>
            <SponsorType dotBackground='linear-gradient(to bottom, #F59F00, #C78100)'>
              Gold
            </SponsorType>
            <Sponsors>
              <SmallSponsor src={MegazoneImage} />
              <SmallSponsor src={MegazoneImage} />
              <SmallSponsor src={MegazoneImage} />
            </Sponsors>
          </Column>
          <Column>
            <Title>후원사 혜택</Title>
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
            {activeRewardType === 'platinum' &&
              <Rewards>
                개별 홍보 시간, 행사 내 부스<br />
                해커톤 주제 및 취업 연계 트랙 운영<br />
                현수막 로고, X Banner 로고, 홈페이지 로고 노출
              </Rewards>
            }
            {activeRewardType === 'gold' &&
              <Rewards>
                개별 홍보 시간<br />
                현수막 로고, X Banner 로고, 홈페이지 로고 노출
              </Rewards>
            }
            <Button
              background='#1C7ED6'
              icon={['fas', 'rocket']}
              label='Amathon 후원사로 참여하기'
            />
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

const Sponsors = styled.div`
  margin-bottom: 3rem;

  &:last-of-type {
    margin-bottom: 0;
  }
`

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
