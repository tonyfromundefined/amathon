import LogoImage from '~/assets/top-logo.svg?inline'
import NavAmathonImage from '~/assets/top-nav-amathon.svg?inline'
import NavAusgImage from '~/assets/top-nav-ausg.svg?inline'
import NavAwskrugImage from '~/assets/top-nav-awskrug.svg?inline'
import styled, { css } from '~/styled'
import Button from './Button'

export default function Top() {
  return (
    <TopContainer>
      <Logo src={LogoImage} />
      <Space />
      <Nav>
        <NavItemContainer isActivated>
          <NavAmathon src={NavAmathonImage} />
        </NavItemContainer>
        <NavItemContainer>
          <NavAwskrug src={NavAwskrugImage} />
        </NavItemContainer>
        <NavItemContainer>
          <NavAusg src={NavAusgImage} />
        </NavItemContainer>
      </Nav>
      <Button
        icon={['fas', 'rocket']}
        label='참가 신청하기'
      />
    </TopContainer>
  )
}

const TopContainer = styled.div`
  align-items: center;
  display: flex;
  padding: 1.5625rem;
`

const Logo = styled.img`
  width: 9rem;
  height: 1.6875rem;
  margin-top: -.0625rem;
  cursor: pointer;
`

const Space = styled.div`
  flex: 1;
`

const Nav = styled.div`
  display: flex;
  margin-right: .5rem;
`

interface INavItemContainerProps {
  isActivated?: boolean
}
const NavItemContainer = styled.a<INavItemContainerProps>`
  cursor: pointer;
  padding: .5rem;
  margin-right: .75rem;
  opacity: .5;
  transition: opacity .2s;
  text-decoration: none;

  &:hover {
    opacity: .7;
  }

  ${(props) => props.isActivated && css`
    opacity: 1;

    &:hover {
      opacity: 1;
    }
  `}
`

const NavAmathon = styled.img`
  width: 3.5625rem;
  height: .75rem;
`

const NavAwskrug = styled.img`
  width: 3.75rem;
  height: .6875rem;
`

const NavAusg = styled.img`
  width: 2.25rem;
  height: .6875rem;
`
