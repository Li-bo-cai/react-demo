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
            }
        }
    }
    style = {
        color: {
            color: 'red',
        }
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
                </form>
                <div>{this.state.form.name}{this.state.form.age}{this.state.form.adress.ts}</div>
            </div>
        )
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
    handleSubmit = (event) => {
        console.log(event);
        event.preventDefault()
    }
}
 
export default Demo1
