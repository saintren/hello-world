import React from 'react';


/**单选框 */
class RadioGroup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: "",
            checkedItem: null
        }
    }

    /**子组件触发 */
    checkItem(item) {

        //不存在被选中的项时
        if (this.state.checkedItem == null) {
            item.setChecked(true);
            this.setState({
                checkedItem: item
            });
            return;
        }

        //如果点击的是同一个，则不做处理
        if (this.state.checkedItem === item) {
            return;
        }

        //当前结点取消选中状态
        item.setChecked(true);
        this.state.checkedItem.setChecked(false);
        this.setState({
            checkedItem: item,
            value: item.getData(),
        });
    }

    render() {

        return (
            <React.Fragment>
                {this.props.datas.map((data) => (
                    <Radio key={data.value} text={data.text} value={data.value} notify={(item) => this.checkItem(item)}></Radio>
                ))
                }
            </React.Fragment>
        );
    }
}

/**单选框 */
class Radio extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: "",
            checked: false
        }
    }

    getData() {
        return this.props.value;
    }

    setChecked(flag) {
        this.setState({
            checked: flag
        });
    }

    renderInternal() {
        if (this.state.checked) {
            return (
                <div className="layui-unselect layui-form-radio layui-form-radioed">
                    <i className="layui-anim layui-icon layui-anim-scaleSpring" onClick={() => this.props.notify(this)}></i>
                    <div>{this.props.text}</div>
                </div>)
        } else {
            return (
                <div className="layui-unselect layui-form-radio">
                    <i className="layui-anim layui-icon" onClick={() => this.props.notify(this)}></i>
                    <div>{this.props.text}</div>
                </div>
            )
        }
    }

    render() {

        return (
            <React.Fragment>
                <input type="radio" name={this.props.name} defaultValue={this.props.value} />
                {this.renderInternal()}
            </React.Fragment>
        );
    }
}

export default RadioGroup;