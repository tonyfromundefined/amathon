import { useCallback, useEffect, useState } from 'react'
import styled, { media } from '~/styled'
import Button from '../System/Button'
import Section from '../System/Section'
import Title, { TitleCaption } from '../System/Title'

const SECOND = 1000
const MINUTE = 60 * SECOND
const HOUR = 60 * MINUTE
const DAY = 24 * HOUR

const END_DATE = new Date('2019-08-23T23:59:59.000Z').getTime()

let frameId: any

function calculateCount() {
  const remainTimes = END_DATE - new Date().getTime()

  return {
    day: Math.floor(remainTimes / DAY),
    hour: Math.floor(remainTimes % DAY / HOUR),
    minute: Math.floor(remainTimes % HOUR / MINUTE),
    second: Math.floor(remainTimes % MINUTE / SECOND),
  }
}

export default function StoryDetail() {
  const {
    day: calculatedDay,
    hour: calculatedHour,
    minute: calculatedMinute,
    second: calculatedSecond,
  } = calculateCount()

  const [day, setDay] = useState(calculatedDay)
  const [hour, setHour] = useState(calculatedHour)
  const [minute, setMinute] = useState(calculatedMinute)
  const [second, setSecond] = useState(calculatedSecond)

  const awaitRequestFrameAndUpdateCount = useCallback(() => {
    frameId = requestAnimationFrame(() => {
      const {
        day: calculatedDay,
        hour: calculatedHour,
        minute: calculatedMinute,
        second: calculatedSecond,
      } = calculateCount()

      setDay(calculatedDay)
      setHour(calculatedHour)
      setMinute(calculatedMinute)
      setSecond(calculatedSecond)

      return awaitRequestFrameAndUpdateCount()
    })
  }, [])

  useEffect(() => {
    awaitRequestFrameAndUpdateCount()

    return () => window.cancelAnimationFrame(frameId)
  }, [])

  const isDayOmitted = day <= 0
  const isHourOmitted = isDayOmitted && hour <= 0
  const isMinuteOmitted = isHourOmitted && minute <= 0
  const isSecondOmitted = isMinuteOmitted && second <= 0

  return (
    <Section>
      <CountdownContainer>
        <CountdownHeader>참가신청 마감까지</CountdownHeader>
        <CountdownCount>
          {!isDayOmitted && day + '일\u00A0'}
          {!isHourOmitted && hour + '시간\u00A0'}
          {!isMinuteOmitted && minute + '분\u00A0'}
          {!isSecondOmitted && second + '초'}
          {day < 0 && hour < 0 && minute < 0 && second < 0 &&
            '참가신청 마감'
          }
        </CountdownCount>
        <Button
          href='https://forms.gle/SQWyoTfRBhULggRx8'
          icon={['fas', 'rocket']}
          label='참가 신청하기'
          background='#D6336C'
          isDisabled={day < 0 && hour < 0 && minute < 0 && second < 0}
        />
      </CountdownContainer>
      <Columns>
        <Column>
          <Title header='주최'>
            AUSG<TitleCaption>AWSKRUG 대학생 모임</TitleCaption><br />
            AWSKRUG<TitleCaption>AWS 한국 사용자 모임</TitleCaption>
          </Title>
          <Title header='대상'>
            AWS와 스타트업에 관심이 있는<br />
            대학생/주니어 개발자 또는 디자이너
          </Title>
          <Title header='진행일자'>
            8월 31일(토) ~ 9월 1일(일)
          </Title>
          <Title header='참가비'>
            10,000원
          </Title>
          <Title header='장소'>
            AWS Korea 12F
          </Title>
        </Column>
        <Column>
          <Title header='신청기간'>
            8월 12일(월) ~ 8월 23일(금)
          </Title>
          <Title header='참가자 발표'>
            8월 24일(토) 개별 안내
          </Title>
          <Title header='참가자 혜택'>
            AWS 굿즈<br />
            스타트업 리크루팅 기회<br />
            간식 무한 제공
          </Title>
          <Title header='진행 방식'>
            참가 신청 시 희망 주제 선택,<br />
            1박 2일 동안 주어진 문제를 해결하기
          </Title>
        </Column>
      </Columns>
    </Section>
  )
}

const CountdownContainer = styled.div`
  margin-bottom: 4rem;
`

const CountdownHeader = styled.h3`
  margin: 0;
  font-size: 1.25rem;
  color: #fff;
`

const CountdownCount = styled.div`
  font-size: 2.5rem;
  color: #fff;
  font-weight: 700;
  margin-top: .75rem;
  margin-bottom: 1.25rem;

  ${media.lessThan('medium')`
    font-size: 2.25rem;
  `}
`

export const Columns = styled.div`
  display: flex;

  ${media.lessThan('medium')`
    display: block;
  `}
`

export const Column = styled.div`
  flex: 1;
  margin-right: 1.5rem;
  position: relative;

  &:last-of-type {
    margin-right: 0;
  }

  ${media.lessThan('medium')`
    box-shadow: 0 1px 0 0 rgba(255, 255, 255, .1);
    padding-bottom: 2rem;
    margin-bottom: 2rem;
    margin-right: 0;

    &:last-of-type {
      box-shadow: none;
      margin-bottom: 0;
      padding-bottom: 0;
    }
  `}
`
