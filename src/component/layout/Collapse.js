import React from 'react';


/**折叠面板布局*/
class Collapse extends React.Component {

    constructor(props) {
        super(props);
    }

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