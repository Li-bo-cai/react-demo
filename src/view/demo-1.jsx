//Class 写法
import React,{Component} from "react";
class Demo1 extends Component{
    constructor(props){
        super(props);
        this.state = {
            name:'张三',
            num:1,
            form:{
                name:'',
                age:'',
                adress:{
                    ts:''
                }
            }
        }
        this.style= {
            color:{
                color:'red',
            }
        }
        this.addClick = this.addClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    render(){
        return(
            <div>
                <div style={this.style.color}>{this.state.name}</div>
                <button onClick={this.addClick}>{this.state.num}</button>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.form.name} name="name" onChange={this.handleChange}></input>
                    <input type="text" value={this.state.form.age} name="age" onChange={this.handleChange}></input>
                    <input type="submit" value="登录"></input>
                </form>
                <div>{this.state.form.name}{this.state.form.age}</div>
            </div>
        )
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                name:"李四"
            });
        },1000)
    }
    addClick(){
        let num = this.state.num;
        num++;
        this.setState({
            num:num
        });
    }
    handleChange(event){
        const target = event.target
        console.log(event);
        let name = this.state.form
        name[target.name] = target.value
        // this.state.form.setState({name:target.value})
        this.setState({form:name[target.name] = target.value})
    }
    handleSubmit(event){
        console.log(event);
        event.preventDefault()
    }
}

export default Demo1
