//Class 写法
import React, { Component } from "react";
class Demo1 extends Component {
    state = {
        name: '张三',
        num: 1,
        form: {
            name: '',
            age: '',
            adress: {
                ts: ''
            },
            selectValue:'two',
            checkValue:{
                react:'',
                redux:'',
                mobx:''
            }
        }
    }
    style = {
        color: {
            color: 'red',
        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                name: "李四"
            });
        }, 1000)
    }
    addClick = () => {
        let num = this.state.num;
        num++;
        this.setState({
            num: num
        });
    }
    handleChange = (event) => {
        // console.log(event);
        const target = event.target
        let name = this.state.form
        if (target.name === 'ts') {
            name.adress[target.name] = target.value
        } else {
            name[target.name] = target.value
        }
        this.setState({ form: name })
    }
    checkChange = (event)=>{
        const target = event.target
        let name = this.state.form
        name.checkValue[target.name] = target.value
        console.log(this.state.form);
        this.setState({form:name})
    }
    changeRef= (event)=>{
        console.log(this.input.value);
        console.log(this.input);
    }
    handleSubmit = (event) => {
        console.log(event);
        event.preventDefault()
    }
    render() {
        return (
            <div>
                <div style={this.style.color}>{this.state.name}</div>
                <button onClick={this.addClick}>{this.state.num}</button>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.form.name} name="name" onChange={this.handleChange}></input>
                    <input type="text" value={this.state.form.age} name="age" onChange={this.handleChange}></input>
                    <input type="text" value={this.state.form.adress.ts} name="ts" onChange={this.handleChange}></input>
                    <input type="submit" value="登录"></input>
                    <select value={this.state.form.selectValue} name="selectValue" onChange={this.handleChange}>
                        <option value="one">你好</option>
                        <option value="two">你好1</option>
                        <option value="three">你好2</option>
                    </select>
                    <label>
                        React
                        <input type="checkbox" name="react" value="react" checked={this.state.form.checkValue.react} onChange={this.checkChange} id="" />
                    </label>
                    <label>
                        Redux
                        <input type="checkbox" name="redux" value="redux" checked={this.state.form.checkValue.redux} onChange={this.checkChange} id="" />
                    </label>
                    <label>
                        Mobx
                        <input type="checkbox" name="mobx" value="mobx" checked={this.state.form.checkValue.mobx} onChange={this.checkChange} id="" />
                    </label>

                    <input type="text" defaultValue="44444" ref={(input)=>this.input = input} onChange={this.changeRef}></input>
                </form>
                <div>{this.state.form.name}{this.state.form.age}{this.state.form.adress.ts}</div>
            </div>
        )
    }
}
 
export default Demo1
