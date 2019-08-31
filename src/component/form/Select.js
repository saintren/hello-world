import React from 'react';

/**表单的下拉框组件 */
export default class Select extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: null,
            selectStatus: false
        };

        this.items = [];
    }

    /**切换选择状态*/
    toggleSelect(event) {
        this.setState((state) => ({
            selectStatus:!state.selectStatus
        })
        );
    }

    selectItem(event){
        console.log(event.target);
        this.items.forEach(item=>{
            if (item==event.target){
                item.setSelected(true);
            }
        });
    }


    renderExtra() {

        this.items = React.Children.map(this.props.children, (option, index) => {
            return (<SelectItem value={option.props.value} key={index} text={option.props.children}/>);
        });

        return (

            <div className={'layui-unselect ' + 'layui-form-select ' + (this.state.selectStatus ? 'layui-form-selected' : '')} onClick={(event) => this.toggleSelect(event)}>
                <Tip tip="ceshi"/>
                <dl className="layui-anim layui-anim-upbit" onClick={(event)=>{this.selectItem(event)}}>
                    <SelectItem value="" text="请选择"/>
                    {this.items}
                </dl>
            </div>
        );

    }

    render() {

        return (
            <React.Fragment>
                <select>
                    {this.props.children}
                </select>
                {this.renderExtra()}

            </React.Fragment>
        );
    }
}
/**显示在选择框上的提示 */
class Tip extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value:this.props.value
        }
    }

    doUpdateValue(val){
        this.setState({
            value:val
        });
    }

    render() {
        return (
            <div className="layui-select-title">
                <input type="text" placeholder={this.props.tip} value={this.state.value} readOnly className="layui-input layui-unselect" /><i className="layui-edge"></i>
            </div>
        );
    }
}

/**选项*/
class SelectItem extends React.Component{

    constructor (props){
        super(props);
        this.state = {
            value:"",
            selected:false
        };
    }

    setSelected(flag){
        this.setState({
            selected:flag
        });  
    }

    render(){
        return (
            <dd className={"layui-select-tips " + (this.state.selected?'layui-this':'')}>{this.props.text}</dd>
        )
    }
}