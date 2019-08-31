import React from 'react';

/**表格布局*/
class Table extends React.Component {

    /**数据结构为{head:["",""],datas:[["",""],["",""]]} */
    constructor(props) {
        super(props);
    }

    getHead(){
        const heads = this.props.head.map((item,index) =>{
            return (<th key={index}>{item}</th>);
        });  
        return heads;
    }

    renderRows(){
        const rows = this.props.datas.map((element,index) => {
            return (<tr key={index}>{this.renderRow(element)}</tr>);
        })

        return rows;
    }

    renderRow(row){

        //console.log(row);

        const columns = row.map((column,index) =>{
            return (<td key={index}>{column}</td>);
        });
        return columns;
    }

    render() {
        return (
            <table className="layui-table">
                <thead>
                    <tr>
                    {this.getHead()}
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
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
            <td title={item.title} key={item.title} text={item.text} />
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

export default Table;