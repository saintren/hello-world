import React from 'react';

/**折叠组件 */
class CollapseItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hidden : false
        }
    }

    onToggle(event){
        this.setState(state =>({
            hidden : !state.hidden
        }));
    }

    render() {

        return (
            <div className="layui-colla-item">
                <h2 className="layui-colla-title">{this.props.title}<i className="layui-icon layui-colla-icon" onClick={(e) => this.onToggle(e)}>{this.state.hidden?'':''}</i></h2>
                <div className={"layui-colla-content" + (this.state.hidden?'':' layui-show')}>{this.props.children}</div>
            </div>
        );
    }
}

export default CollapseItem;