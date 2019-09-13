import React from 'react';


/**折叠面板布局*/
class Collapse extends React.Component {

    componentDidMount(){
        
    }

    render() {
        return (
            <div className="layui-collapse">
               {this.props.children}
            </div>
        );
    }
}

export default Collapse;