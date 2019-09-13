import React, { Component } from 'react';

/**表单的下拉框组件 */
export default class Select extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tipValue: null,
            value: "",
            selectStatus: false,
            currentItem: null
        };
    }

    /**切换选择状态*/
    toggleSelect(event) {
        this.setState((state) => ({
            selectStatus: !state.selectStatus
        })
        );
    }

    initItems() {
        const array = [];

        array.push(<SelectItem key="default" value="" text={this.props.tip} selected="true" notify={(item) => this.selectItem(item)} />);

        React.Children.forEach(this.props.children, (option, index) => {
            array.push(<SelectItem value={option.props.value} key={index} text={option.props.children} notify={(item) => this.selectItem(item)} />);
        });

        return array;
    }

    /**子组件触发 */
    selectItem(item) {

        if (this.state.currentItem == null) {
            this.setState({
                currentItem: item
            });
            return;
        }

        this.state.currentItem.setSelected(false);
        this.setState({
            currentItem: item,
            value: item.getValue(),
            tipValue: item.getValue() === "" ? "" : item.getText()//显示值为选项的文本值
        });
    }

    render() {

        return (
            <React.Fragment>
                <select defaultValue={this.state.value}>
                    {this.props.children}
                </select>
                <div className={'layui-unselect layui-form-select ' + (this.state.selectStatus ? 'layui-form-selected' : '')} onClick={(event) => this.toggleSelect(event)}>
                    <Tip tip={this.props.tip} value={this.state.tipValue} />
                    <dl className="layui-anim layui-anim-upbit">
                        {this.initItems()}
                    </dl>
                </div>
            </React.Fragment>
        );
    }
}
Select.defaultProps = {
    tip: "请选择"
}
/**显示在选择框上的提示 */
class Tip extends Component {

    render() {
        return (
            <div className="layui-select-title">
                <input type="text" placeholder={this.props.tip} defaultValue={this.props.value} readOnly className="layui-input layui-unselect" /><i className="layui-edge"></i>
            </div>
        );
    }
}

/**选项*/
class SelectItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: false
        };
    }

    getValue() {
        return this.props.value;
    }

    getText() {
        return this.props.text;
    }

    setSelected(flag) {
        this.setState({
            selected: flag
        });
    }

    /**初始化 */
    componentDidMount() {
        if (this.props.selected) {
            this.handleClick();
        }
    }

    /**处理点击事件 */
    handleClick() {
        this.setSelected(true);//选中
        this.props.notify(this);//通知父组件
    }

    render() {
        return (
            <dd className={"layui-select-tips " + (this.state.selected ? 'layui-this' : '')} onClick={() => this.handleClick()}>{this.props.text}</dd>
        )
    }
}
