import Button from '../../../components/Button/Button'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SidebarNav = () => {
  //TODO: '최근 업데이트' 섹션을, api 요청의 결과를 가지고 렌더링해야 함

  const [isSection1Open, setIsSection1Open] = useState(false)
  const [isSection2Open, setIsSection2Open] = useState(false)

  return (
    <div className="sidebar__section_scrollable">
      <div
        className={
          'sidebar__section ' +
          (isSection1Open
            ? 'sidebar__dropdown_opened'
            : 'sidebar__dropdown_closed')
        }
      >
        <div
          className="sidebar__list-item sidebar__list-title"
          onClick={(e: React.MouseEvent) => {
            setIsSection1Open(!isSection1Open)
          }}
        >
          모아보기
          <button
            className={
              'button ' +
              (isSection1Open ? 'sidebar__arrow-up' : 'sidebar__arrow-down')
            }
            style={{ backgroundColor: 'rgb(44, 42, 52)' }}
          ></button>
        </div>
        <Link to="tasks" className="sidebar__list-item sidebar__list-item_dark">
          전체 업무
        </Link>
        <Link
          to="gaant-chart"
          className="sidebar__list-item sidebar__list-item_dark"
        >
          간트 차트
        </Link>
        <Link
          to="calendar"
          className="sidebar__list-item sidebar__list-item_dark"
        >
          캘린더
        </Link>
        <Link to="files" className="sidebar__list-item sidebar__list-item_dark">
          파일함
        </Link>
        <Link
          to="bookmark"
          className="sidebar__list-item sidebar__list-item_dark"
        >
          북마크
        </Link>
        <Link
          to="shoutout"
          className="sidebar__list-item sidebar__list-item_dark"
        >
          나를 언급
        </Link>
        <Link
          to="my-writings"
          className="sidebar__list-item sidebar__list-item_dark"
        >
          내 게시물
        </Link>
        <Link
          to="temporary-store"
          className="sidebar__list-item sidebar__list-item_dark"
        >
          임시저장
        </Link>
      </div>
      <div className="sidebar__section">
        <div className="sidebar__list-item sidebar__list-title">
          최근 업데이트{' '}
          <button
            className={
              'button ' +
              (isSection2Open ? 'sidebar__arrow-up' : 'sidebar__arrow-down')
            }
            style={{ backgroundColor: 'rgb(44, 42, 52)' }}
          ></button>
        </div>
        <Button className="sidebar__list-item sidebar__list-item_dark">
          {/* api 콜로 받은 정보를 여기에 기입한다 */}
          테스트1
        </Button>
        <Button className="sidebar__list-item sidebar__list-item_dark">
          {/* api 콜로 받은 정보를 여기에 기입한다 */}
          테스트2
        </Button>
        <Button className="sidebar__list-item sidebar__list-item_dark">
          {/* api 콜로 받은 정보를 여기에 기입한다 */}
          테스트3
        </Button>
        <Button className="sidebar__list-item sidebar__list-item_dark">
          {/* api 콜로 받은 정보를 여기에 기입한다 */}
          테스트4
        </Button>
        <Button className="sidebar__list-item sidebar__list-item_dark">
          {/* api 콜로 받은 정보를 여기에 기입한다 */}
          테스트5
        </Button>
      </div>
    </div>
  )
}

export default SidebarNav
