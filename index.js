//引入react核心库
import React from 'react';
//引入reactDom
import ReactDOM from 'react-dom/client';
//引入APP组件
import App from './App'
// import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App tab="home" />);
//渲染APP到页面
// ReactDOM.render(<App />, document.getElementById('root'))




