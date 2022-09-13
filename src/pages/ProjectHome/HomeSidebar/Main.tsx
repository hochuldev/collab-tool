import Button from "../../../components/Button/Button"
import { Link } from "react-router-dom"
import { ReactComponent as HomeIcon } from "../../../assets/home-icon.svg"
import { ReactComponent as SearchIcon } from "../../../assets/search-icon.svg"
import { ReactComponent as DrawerIcon } from "../../../assets/drawer-icon.svg"
import { ReactComponent as ThreeDotsIcon } from "../../../assets/three-dots-icon.svg"
import "./Main.css"
import { EmptyProps } from "../../../typeDeclaration"

const Main = (props: EmptyProps) => {
  // 메뉴들 Link 태그로 감싸자.
  const textColor = "#AAA9A9"
  return (
    <div className="sidebar__main sidebar__section">
      <Button
        width={"176px"}
        height="40px"
        className="sidebar__list-item sidebar__button sidebar__button_blue-background"
      >
        새 프로젝트
      </Button>
      <Button className="sidebar__list-item sidebar__list-item_dark">
        <HomeIcon
          stroke={textColor}
          className="sidebar__icon sidebar__icon_dark"
        />
        내 프로젝트
      </Button>
      <Button className="sidebar__list-item sidebar__list-item_dark">
        <SearchIcon
          stroke={textColor}
          className="sidebar__icon sidebar__icon_dark"
        />
        회사 공개 프로젝트
      </Button>
      <Button className="sidebar__list-item sidebar__list-item_dark">
        <DrawerIcon
          fill={textColor}
          className="sidebar__icon sidebar__icon_dark"
        />
        미분류
      </Button>
      <Button className="sidebar__list-item sidebar__list-item_dark">
        <ThreeDotsIcon
          stroke={textColor}
          className="sidebar__icon sidebar__icon_dark"
        />
        더보기
      </Button>
    </div>
  );
};

export default Main
