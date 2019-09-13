import React from 'react';

/**
 * 容器
 * */
class FrameworkContainer extends React.Component{

    render(){
        return (
            <div className="layui-container">
                <div className="layui-row">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default FrameworkContainer;