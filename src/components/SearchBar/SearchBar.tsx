import React from "react";
import "./SearchBar.css"
import searchIcon from "../../assets/search-icon.svg"

const SearchBar = () => {
  // TODO: 옵션 클릭시 옵션 창이 나타나도록 구현해야함.
  // TODO: 상태와 value 값이 같도록 구현해야함.
  return(
    <div className="search-bar">
      <img src={searchIcon} alt="검색 아이콘" className="search-bar__icon"></img>
      <input type="text" placeholder="검색어를 입력해주세요" className="search-bar__input"></input>
      <button type="button" className="search-bar__button"><span className="search-bar__divider" aria-hidden="true">|</span> 옵션</button>
    </div>
  )
}

export default SearchBar