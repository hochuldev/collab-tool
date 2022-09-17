// 사이드바 컴포넌트의 서브 컴포넌트인 Section 컴포넌트를 합성 패턴으로 확장하지 않으면서,
// props 개수가 많아지고, 컴포넌트가 복잡해졌다.
// 이 때문에, 새로운 확장 가능한 서브 컴포넌트인 SectionComposable을 추가했다.

import Button from '../Button/Button'
import React, { JSXElementConstructor, ReactElement, useState } from 'react'
import { Link } from 'react-router-dom'

export interface SidebarSectionProps {
  title?: string
  buttonText?: string
  collapsable?: boolean
  icon: Array<
    | JSXElementConstructor<{
        stroke?: string
        fill?: string
        className?: string
      }>
    | undefined
  >
  text: Array<string | undefined> // i번째 index의 값이 undefined라면, i번째 요소는 텍스트를 갖지 않는다.
  address: Array<string | undefined> // i번째 index의 값이 undefined라면, i번째 요소는 버튼이다.
  bgColor?: string
  color?: string
}

interface SidebarElementProps {
  componentsToRender: Array<ReactElement>
  icon:
    | JSXElementConstructor<{
        stroke?: string
        fill?: string
        className?: string
      }>
    | undefined
  color: string
  text: string | undefined // i번째 index의 값이 undefined라면, i번째 요소는 텍스트를 갖지 않는다.
  address: string | undefined // i번째 index의 값이 undefined라면, i번째 요소는 버튼이다.
}

const addLink = ({
  componentsToRender,
  address,
  color,
  icon,
  text,
}: SidebarElementProps) => {
  // 아이콘과 텍스트가 존재하는 Link요소를 사이드바 섹션에 추가한다.
  // 아이콘이 제공되지 않으면, 아이콘이 없는 요소를 추가한다.
  const Icon = icon
  componentsToRender.push(
    <Link
      to={address as string}
      className="sidebar__list-item sidebar__list-item_dark"
    >
      {Icon !== undefined ? (
        <Icon
          stroke={color}
          fill={color}
          className="sidebar__icon sidebar__icon_dark"
        />
      ) : undefined}
      {text}
    </Link>
  )
}

const addButton = ({
  componentsToRender,
  color,
  icon,
  text,
}: SidebarElementProps) => {
  // address가 제공되지 않았다면, 링크가 아닌 버튼을 사이드바에 추가한다.
  const Icon = icon
  componentsToRender.push(
    <Button className="sidebar__list-item sidebar__list-item_dark">
      {Icon !== undefined ? (
        <Icon
          stroke={color}
          fill={color}
          className="sidebar__icon sidebar__icon_dark"
        />
      ) : undefined}
      {text}
    </Button>
  )
}

const Section = ({
  title,
  buttonText,
  collapsable,
  icon,
  text,
  address,
  bgColor,
  color,
}: SidebarSectionProps) => {
  color = color !== undefined ? color : '#AAA9A9'
  bgColor = bgColor !== undefined ? bgColor : 'rgb(44, 42, 52)'
  collapsable = collapsable !== undefined ? collapsable : false

  if (icon.length !== text.length || icon.length !== address.length)
    throw Error(
      `The number of the icons must equal to the number of the linkText and the number of the linkAddress.
      If there exists a link without an icon or a button without an address, add 'undefined' to clarify which element should be without an icon or a link.`
    )

  const [isOpen, setIsOpen] = useState(false)
  const componentsToRender: Array<ReactElement> = []

  icon.forEach((Icon, i) => {
    if (address[i] !== undefined) {
      addLink({
        componentsToRender: componentsToRender,
        address: address[i],
        color: color as string,
        icon: Icon,
        text: text[i],
      })
    } else {
      addButton({
        componentsToRender: componentsToRender,
        address: address[i],
        color: color as string,
        icon: Icon,
        text: text[i],
      })
    }
  })

  return (
    <div
      className={
        'sidebar__main sidebar__section' +
        (!isOpen && collapsable
          ? ' sidebar__dropdown_closed'
          : ' sidebar__dropdown_opened')
      }
    >
      {title !== undefined ? (
        <div
          className="sidebar__list-item sidebar__list-title"
          onClick={(e: React.MouseEvent) => {
            setIsOpen(!isOpen)
          }}
        >
          {title}
          <button
            className={
              'button ' + (isOpen ? 'sidebar__arrow-up' : 'sidebar__arrow-down')
            }
            style={{ backgroundColor: bgColor }}
          ></button>
        </div>
      ) : undefined}
      {buttonText !== undefined ? (
        <Button
          width={'176px'}
          height="40px"
          className="sidebar__list-item sidebar__button sidebar__button_blue-background"
        >
          {buttonText}
        </Button>
      ) : undefined}
      {componentsToRender}
    </div>
  )
}

export default Section
