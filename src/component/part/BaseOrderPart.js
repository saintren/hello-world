import React from 'react';

import Panel from '../layout/Panel';
/**
 * 订单基础部分
 * 
*/
class BaseOrderPart extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Panel title={this.props.title} >
                <table className="layui-table">
                    <tbody>
                        <Row columns={[{ title: 'Loan App Id', text: '100390' }, { title: 'Score', text: Math.random() }, { title: 'Mobile', text: '12323' }]} />
                        <Row columns={[{ title: 'Name', text: 'Saint Ren' }, { title: 'Apply Time', text: new Date().toLocaleTimeString() }, { title: '', text: '' }]} />
                        <Row columns={[{ title: 'App Name', text: '自有业务平台' }, { title: 'Loan Amount', text: '3000' }, { title: 'Term', text: '12 Days' }]} />
                    </tbody>
                </table>
            </Panel>
        );
    }
}

/**行*/
class Row extends React.Component {

    constructor(props) {
        super(props);
    }

    renderColumns() {
        const temp = this.props.columns.map((item) => {
            return this.renderItem(item);
        })

        return temp;
    }

    renderItem(item) {

        return (
            <Column title={item.title} key={item.title} text={item.text} />
        );
    }

    render() {
        return (
            <tr>
                {this.renderColumns()}
            </tr>
        );
    }
}
/**列*/
class Column extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <td className="layui-bg-gray">{this.props.title}</td>
                <td>{this.props.text}</td>
            </React.Fragment>
        );
    }
}

export default BaseOrderPart;