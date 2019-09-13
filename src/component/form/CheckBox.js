import React from 'react';

/**选择框 */
class CheckBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: "",
            checked: false
        }
    }

    toggleChecked() {
        this.setState((state) => ({
            value: "",
            checked: !state.checked
        }));
    }

    render() {
        return (

            <React.Fragment>
                <input type="checkbox" name={this.props.name}></input>
                <div className={"layui-unselect layui-form-checkbox" + (this.state.checked ? ' layui-form-checked' : '')} onClick={() => this.toggleChecked()}>
                    <span>{this.props.text}</span>
                    <i className="layui-icon layui-icon-ok"></i>
                </div>
            </React.Fragment>
        );
    }
}

export default CheckBox;