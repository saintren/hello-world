import React from 'react';

/**面板 */
class Panel extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="layui-card">
                <div className="layui-card-header layui-bg-cyan">{this.props.title}</div>
                <div className="layui-card-body">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Panel;