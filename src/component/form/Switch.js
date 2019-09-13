import React, { Component } from 'react';

/**表单的下拉框组件 */
export default class Switch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: "",
            on: false,
            currentText: this.props.off
        };
    }

    /**切换选择状态*/
    toggleSelect(event) {

        if (this.state.on){
            this.setState({
                on:false,
                value:"",
                currentText:this.props.off
            });
        }else{
            this.setState({
                on:true,
                value:this.props.value,
                currentText:this.props.on
            });
        }

    }

    render() {

        return (
            <React.Fragment>
                <input type="checkbox" name={this.props.name} />
                <div className={"layui-unselect layui-form-switch" + (this.state.on?" layui-form-onswitch":'')} lay-skin="_switch" onClick={()=>this.toggleSelect()}>
                    <em>{this.state.currentText}</em>
                    <i></i>
                </div>
            </React.Fragment>
        );
    }
}