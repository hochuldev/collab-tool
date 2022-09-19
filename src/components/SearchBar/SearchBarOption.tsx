import React, { useState } from 'react'
import Button from '../Button/Button'
import { ReactComponent as ResetIcon } from '../../assets/reset-icon.svg'
import './SearchBarOption.css'

const PERIOD = {
  TOTAL: 'TOTAL',
  TODAY: 'TODAY',
  WEEK: 'WEEK',
  MONTH: 'MONTH',
  QUARTER: 'QUARTER',
  HALF_YEAR: 'HALFYEAR',
  YEAR: 'YEAR',
}

const TARGET = {
  TOTAL: 'TOTAL',
  WRITING: 'WRITING',
  WORK: 'WORK',
  SCHEDULE: 'SCHEDULE',
  TODO: 'TODO',
  COMMENTS: 'COMMENTS',
}

const SearchBarOption = ({isOpened}: {isOpened: boolean}) => {
  const [author, setAuthor] = useState('')
  const [timePeriod, setTimePeriod] = useState(undefined)
  const [targetType, setTargetType] = useState(TARGET.TOTAL)

  return (
    isOpened ? <div className="search-bar__option">
      <div className="search-bar__option-title">옵션</div>
      <fieldset className="search-bar__fieldset search-bar__fieldset_author">
        <div className="search-bar__title_author search-bar__title">작성자</div>
        <input
          className="search-bar__input_author"
          type="text"
          placeholder="작성자명 입력 (여러명 입력시, 콤마로 구분)"
        ></input>
      </fieldset>
      <fieldset className="search-bar__fieldset search-bar__fieldset_period">
        <div className="search-bar__title_period search-bar__title">
          검색기간
        </div>
        <div className="search-bar__input-container">
          <div className="search-bar__radio-input-container">
            <input
              className="search-bar__radio"
              id="total"
              type="radio"
              value="total"
              name="검색기간"
            ></input>
            <label htmlFor="total">전체</label>
          </div>
          <div className="search-bar__radio-input-container">
            <input
              className="search-bar__radio"
              id="today"
              type="radio"
              value="today"
              name="검색기간"
            ></input>
            <label htmlFor="today">오늘</label>
          </div>
          <div className="search-bar__radio-input-container">
            <input
              className="search-bar__radio"
              id="week"
              type="radio"
              value="week"
              name="검색기간"
            ></input>
            <label htmlFor="week">7일</label>
          </div>
          <div className="search-bar__radio-input-container">
            <input
              className="search-bar__radio"
              id="month"
              type="radio"
              value="month"
              name="검색기간"
            ></input>
            <label htmlFor="month">1개월</label>
          </div>
          <div className="search-bar__radio-input-container">
            <input
              className="search-bar__radio"
              id="quarter"
              type="radio"
              value="quarter"
              name="검색기간"
            ></input>
            <label htmlFor="quarter">3개월</label>
          </div>
          <div className="search-bar__radio-input-container">
            <input
              className="search-bar__radio"
              id="half-year"
              type="radio"
              value="half-year"
              name="검색기간"
            ></input>
            <label htmlFor="half-year">6개월</label>
          </div>
          <div className="search-bar__radio-input-container">
            <input
              className="search-bar__radio"
              id="year"
              type="radio"
              value="year"
              name="검색기간"
            ></input>
            <label htmlFor="year">1년</label>
          </div>
          <div className="search-bar__radio-input-container">
            <input
              className="search-bar__radio"
              id="custom"
              type="radio"
              value="custom"
              name="검색기간"
            ></input>
            <label htmlFor="custom">기간선택</label>
          </div>
        </div>
      </fieldset>
      <fieldset className="search-bar__fieldset search-bar__fieldset_target">
        <div className="search-bar__title_target search-bar__title">대상</div>
        
        <div className="search-bar__input-container">
          <div className="search-bar__radio-input-container">
            <input id="total" type="radio" value="total" name="target-type"></input>
            <label htmlFor="total">전체</label>
          </div>
          <div className="search-bar__radio-input-container">
            <input
              id="writing"
              type="radio"
              value="writing"
              name="target-type"
            ></input>
            <label htmlFor="writing">글</label>
          </div>
          <div className="search-bar__radio-input-container">
            <input id="task" type="radio" value="task" name="target-type"></input>
            <label htmlFor="task">업무</label>
          </div>
          <div className="search-bar__radio-input-container">
            <input
              id="schedule"
              type="radio"
              value="schedule"
              name="target-type"
            ></input>
            <label htmlFor="schedule">일정</label>
          </div>
          <div className="search-bar__radio-input-container">
            <input id="todo" type="radio" value="todo" name="target-type"></input>
            <label htmlFor="todo">할 일</label>
          </div>
          <div className="search-bar__radio-input-container">
            <input
              id="comment"
              type="radio"
              value="comment"
              name="target-type"
            ></input>
            <label htmlFor="comment">댓글</label>
          </div>
        </div>
      </fieldset>
      <Button width="fit-content">
        <ResetIcon
          className="search-bar__reset-icon"
          width="17px"
          stroke="black"
        >
          {' '}
        </ResetIcon>
        <span className="search-bar__reset-text">초기화</span>
      </Button>
      <Button width="fit-content" className="search-bar__cancel-button">
        취소
      </Button>
      <Button width="fit-content" className="search-bar__search-button">
        검색
      </Button>
    </div>: <></>
  )
}

export default SearchBarOption
