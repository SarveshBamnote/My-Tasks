import {Component} from 'react'
import {v4} from 'uuid'

import Tags from './components/Tags'
import Task from './components/Task'

import './App.css'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class App extends Component {
  state = {
    taskInput: '',
    tagsInput: tagsList[0].optionId,
    tasksList: [],
    selectedTag: '',
  }

  onChangeTaskInput = event => {
    this.setState({taskInput: event.target.value})
  }

  onChangeTags = event => {
    this.setState({tagsInput: event.target.value})
  }

  selectTag = optionId => {
    const {selectedTag} = this.state
    if (selectedTag === optionId) {
      this.setState({selectedTag: ''})
    } else {
      this.setState({selectedTag: optionId})
    }
  }

  onClickAddBtn = event => {
    event.preventDefault()
    const {taskInput, tagsInput, tasksList} = this.state

    const tagsText = tagsList.find(each => each.optionId === tagsInput)

    const newTaskDetail = {
      id: v4(),
      task: taskInput,
      tags: tagsInput,
      tagsdisplayText: tagsText.displayText,
    }

    this.setState({
      tasksList: [...tasksList, newTaskDetail],
      taskInput: '',
      tagsInput: tagsList[0].optionId,
    })
  }

  render() {
    const {taskInput, tasksList, selectedTag, tagsInput} = this.state
    const filterList = tasksList.filter(each => each.tags.includes(selectedTag))
    const listLenght = filterList.length === 0

    return (
      <div className="app-container">
        <form className="task-form" onSubmit={this.onClickAddBtn}>
          <h1 className="main-heading">Create a task!</h1>
          <label className="label" htmlFor="task">
            Task
          </label>
          <input
            className="input"
            value={taskInput}
            onChange={this.onChangeTaskInput}
            id="task"
            type="text"
            placeholder="Enter the task here"
          />

          <label className="label" htmlFor="tags">
            Tags
          </label>
          <select
            className="input"
            onChange={this.onChangeTags}
            id="tags"
            value={tagsInput}
          >
            {tagsList.map(each => (
              <option value={each.optionId} key={each.optionId}>
                {each.displayText}
              </option>
            ))}
          </select>

          <button className="add-button" type="submit">
            Add Task
          </button>
        </form>

        <div className="tags-tasks-container">
          <h1 className="heading">Tags</h1>
          <ul className="tags-list">
            {tagsList.map(each => (
              <Tags
                selectTag={this.selectTag}
                eachTag={each}
                key={each.optionId}
                isSelected={selectedTag === each.optionId}
              />
            ))}
          </ul>
          <h1 className="heading">Tasks</h1>
          {listLenght ? (
            <p className="no-tasks">No Tasks Added Yet</p>
          ) : (
            <ul className="tasks-lists">
              {filterList.map(each => (
                <Task eachTask={each} key={each.id} />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default App
