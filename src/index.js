// 核心库
import React from 'react';
// react虚拟dom
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


function tick(){
	// data={new Data()} 向组件参入参数 组件的用法 <APP /> render 第一个参数市模板 jsx 写法 第二个参数是获取到的dom对象 也就是挂载点
ReactDOM.render(<App date={new Date()}/>, document.getElementById('root'));
}
// 保持页面元素动态变化 因为react数值市单向绑定的 不是双向绑定的
setInterval(tick,1000);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: ht	tps://bit.ly/CRA-PWA
serviceWorker.unregister();
