import Button from "../../../components/Button/Button"

const SidebarNav = () => {
  return (
    <div className="sidebar__section">
      <div className="sidebar__list-item_em">모아보기</div>
      <nav className="sidebar__nav">
        <ul className="sidebar__list ">
          <Button className="sidebar__list-item sidebar__list-item_dark">
            <li>전체 업무</li>
          </Button>
          <li className="sidebar__list-item">간트 차트</li>
          <li className="sidebar__list-item">캘린더</li>
          <li className="sidebar__list-item">파일함</li>
          <li className="sidebar__list-item">북마크</li>
          <li className="sidebar__list-item">나를 언급</li>
          <li className="sidebar__list-item">내 게시물</li>
          <li className="sidebar__list-item">임시저장</li>
        </ul>
      </nav>
    </div>
  )
}

export default SidebarNav