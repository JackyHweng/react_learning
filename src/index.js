import ReactDom from 'react-dom'
import './base.css'
import './index.css'


const isLoad = false
const age = 19
const name = 'jacky'
const car = {
    brand: '法拉利'
}
const friends = ['A', 'B']
const songs = ['Moon Night', 'Baby', 'Hello']

function hello(){
    return 'hello world'
}

function conditionRender() {
    return  !isLoad ? 'No' : 'Yes'
}

const list = [
    { id: 1, name: "刘德华", content: "给我一杯忘情水" },
    { id: 2, name: "五月天", content: "不打扰，是我的温柔" },
    { id: 3, name: "毛不易", content: "像我这样优秀的人" }
];

let dv = (<div style={{ color:'red',background:'pink' }}>style 样式</div>);
let dv2 = (<div className="title" >style 样式</div>);
const title = <div>
    <h1>name: {name}</h1>
    <h1>age: {age}</h1>
    <h1>isAdult: {age > 18 ? 'Yes' : 'No'}</h1>
    <h1>car: {car.brand}</h1>
    <h1>friend: {friends}</h1>
    <h1>say: {hello()}</h1>
    <h1>condition render: {conditionRender()}</h1>
    <h1>Songs:</h1> <div><ul>{songs.map(s => <li>{s}</li>)}</ul></div>
    <div>{dv}</div>
    <div>{dv2}</div>
    <div>{list.map(item => <div id={item.id}>{item.content}</div>)}</div>
</div>

function commentRender(){
    if(list.length === 0){
        return <div>暂无数据</div>
    }

    return (<div>
        <ul>
            {list.map(item => (
                <li>
                    <h3 className="pink">{item.name}</h3>
                    <p className="skyblue">{item.content}</p>
                </li>
            ))}
        </ul>
    </div>
    )
}

ReactDom.render(commentRender(),document.getElementById('root'))
