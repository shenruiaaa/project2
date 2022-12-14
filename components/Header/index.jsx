import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid'
import './index.css'

export default class Header extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired, //限制addTodo必传，且为函数形式

  }
  //键盘事件的回调
  handleKeyUp = (event) => {
    //解构赋值获取keyCode,target
    const { keyCode, target } = event
    //判断是否是回车键
    if (keyCode !== 13) return
    //添加的todo名字不能为空
    if (target.value.trim() === '') {
      alert('输入不能为空')
      return
    }
    //准备好一个todo对象
    // console.log(target.value)
    const todoObj = { id: nanoid(), name: target.value, done: false }
    //将todoObj传递给App
    this.props.addTodo(todoObj)
    //清空输入
    target.value = ''
  }
  render() {

    return (
      <div>
        <div className="todo-header">
          <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认" />
        </div>
      </div>
    )
  }
}
