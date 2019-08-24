import React from 'react';

/**
 * 容器
 * */
class OrderForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    /**提交*/
    onSubmit(event){
        //阻止事件传播
        event.preventDefault();
        console.log("submit");
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
            </form >
        );
    }
}

export default OrderForm;