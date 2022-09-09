import React, { useState } from "react";
import './ProjectHeader.css';
import { EmptyProps } from "../../typeDeclaration";
import ProjectHeaderNav from "./ProjectHeaderNav";
import ProjectHeaderTop from "./ProjectHeaderTop";
import SearchBar from "../SearchBar/SearchBar";

const ProjectHeader = (props: EmptyProps) => {
  const [projectColor, setProjectColor] = useState('blue') // TODO: api 콜을 통해, 서버에 저장된 프로젝트 정보(색, 이름 등)를 불러와서, state를 변경하는 코드를 추가해야 함.
  const [projectName, setProjectName] = useState('Workflow')

  return (
    <header className="project-header">
      <ProjectHeaderTop projectColor={projectColor} projectName={projectName}></ProjectHeaderTop>
      <ProjectHeaderNav/>
      <SearchBar/>
    </header>
  )
}

export default ProjectHeader