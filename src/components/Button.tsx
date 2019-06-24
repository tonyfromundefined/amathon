import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import styled, { css } from '~/styled'

interface IButtonProps {
  icon?: IconProp
  label: string
  href?: string
  isDisabled?: boolean
  isLoading?: boolean
  background?: string
  hoverBackground?: string
  borderColor?: string
  color?: string
  width?: string
  height?: string
  fontSize?: string
  marginRight?: string
  onClick?: () => any
}
export default function Button(props: IButtonProps) {
  const router = useRouter()
  const [isLinkLoading, setIsLinkLoading] = useState(false)

  const onClick = () => {
    if (props.href && props.href !== router.pathname) {
      setIsLinkLoading(true)
    }

    if (props.onClick && !props.isDisabled && !props.isLoading) {
      props.onClick()
    }
  }

  const Anchor = (
    <AnchorElement
      background={props.background}
      borderColor={props.borderColor}
      color={props.color}
      width={props.width}
      fontSize={props.fontSize}
      height={props.height}
      marginRight={props.marginRight}
      isDisabled={props.isDisabled}
      isLoading={props.isLoading || isLinkLoading}
      hoverBackground={props.hoverBackground}
      onClick={onClick}
    >
      {(props.isLoading || isLinkLoading) &&
        <LoadingIcon>
          <FontAwesomeIcon icon={['far', 'spinner-third']} spin />
        </LoadingIcon>
      }
      {props.icon &&
        <Icon>
          <FontAwesomeIcon icon={props.icon} />
        </Icon>
      }
      <Label>{props.label}</Label>
    </AnchorElement>
  )

  if (props.href && router && props.href !== router.pathname) {
    return (
      <Link
        href={props.href}
        passHref
        prefetch
      >
        {Anchor}
      </Link>
    )

  } else {
    return Anchor
  }
}

const Icon = styled.div`
  margin-right: .3rem;
`

const Label = styled.div`
  font-weight: 700;
`

interface IAnchorElementProps {
  background?: string
  borderColor?: string
  color?: string
  width?: string
  height?: string
  fontSize?: string
  marginRight?: string
  isDisabled?: boolean
  isLoading?: boolean
  hoverBackground?: string
}
const AnchorElement = styled.a<IAnchorElementProps>`
  background: ${(props) => props.background || '#000'};
  border-radius: .125rem;
  cursor: pointer;
  font-size: ${(props) => props.fontSize || '.8125rem'};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${(props) => props.height || '2rem'};
  padding: 0 .925em;
  position: relative;
  color: #fff;
  text-decoration: none;
  transition: transform .2s, color .2s, background .2s, box-shadow .2s;
  margin-right: ${(props) => props.marginRight || '.875em'};
  user-select: none;

  &:active {
    transform: scale(.95);
  }

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    background: ${(props) => props.hoverBackground};
  }

  ${(props) => props.borderColor && css`
    box-shadow: inset 0 0 0 1px ${props.borderColor};
  `}

  ${(props) => props.color && css`
    color: ${props.color};
  `}

  ${(props) => props.width && css`
    width: ${props.width};
  `}

  ${(props) => (props.isDisabled || props.isLoading) && css`
    background: ${(props) => props.theme.gray[2]};
    cursor: not-allowed;
    color: ${(props) => props.theme.gray[5]};
    box-shadow: none;
  `}

  ${(props) => props.isLoading && css`
    ${Icon} {
      opacity: 0;
    }

    ${Label} {
      opacity: 0;
    }
  `}
`

const LoadingIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1rem;
`
