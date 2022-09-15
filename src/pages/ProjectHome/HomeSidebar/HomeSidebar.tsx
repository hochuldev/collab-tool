import Sidebar from '../../../components/Sidebar/Sidebar'
import { EmptyProps } from '../../../typeDeclaration'
import { ReactComponent as HomeIcon } from '../../../assets/home-icon.svg'
import { ReactComponent as SearchIcon } from '../../../assets/search-icon.svg'
import { ReactComponent as DrawerIcon } from '../../../assets/drawer-icon.svg'
import { ReactComponent as ThreeDotsIcon } from '../../../assets/three-dots-icon.svg'

const HomeSidebar = (props: EmptyProps) => {
  return (
    <Sidebar className="sidebar_dark">
      <Sidebar.Section
        buttonText="새 프로젝트"
        icon={[HomeIcon, SearchIcon, DrawerIcon, ThreeDotsIcon]}
        text={['내 프로젝트', '회사 공개 프로젝트', '미분류', '더보기']}
        address={['my-project', 'open-project', 'uncategorized', undefined]}
      />
      <Sidebar.Section
        collapsable={true}
        title="모아보기"
        icon={[HomeIcon, HomeIcon, HomeIcon, HomeIcon, HomeIcon, HomeIcon, HomeIcon, HomeIcon]}
        text={['전체 업무', '간트 차트', '캘린더', '파일함', '북마크', '나를 언급', '내 게시물', '임시저장']}
        address={['tasks', 'gaant-chart', 'calendar', 'files', 'bookmark', 'shout-out', 'my-writings', 'temp']}
      />
      <Sidebar.Section 
        collapsable={true}
        title="최근 업데이트"
        icon={[undefined, undefined, undefined]}
        text={['테스트1', '테스트2', '테스트3']}
        address={[undefined, undefined, undefined]}
      />
    </Sidebar>
  )
}

export default HomeSidebar
