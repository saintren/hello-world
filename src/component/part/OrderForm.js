import React from 'react';


import Select from '../form/Select';
import RadioGroup from '../form/RadioGroup';
/**
 * 容器
 * */
class OrderForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
        this.select = React.createRef();
    }

    /**提交*/
    onSubmit(event){
        //阻止事件传播
        event.preventDefault();
        console.log("submit "+this.select.current.state.value);
    }


    /**渲染*/
    render() {
        return (
            <form className="layui-form" onSubmit={(e) => this.onSubmit(e)}>
                <fieldset className="layui-elem-field layui-field-title">
                    <legend>{this.props.title}</legend>
                    <div className="layui-field-box">
                        <div className="layui-col-md2 layui-col-md-offset10">
                            <button className="layui-btn">{this.props.btnName}</button>
                        </div>
                    </div>
                </fieldset>
                <Select ref={this.select}>
                    <option value="1">选项1</option>
                    <option value="2">选项2</option>
                    <option value="3">选项3</option>
                </Select>
                <RadioGroup name="text" datas={[{text:"测试1",value:"1"},{text:"测试2",value:"2"},{text:"测试3",value:"3"}]}>
                </RadioGroup>
            </form>
        );
    }
}

export default OrderForm;