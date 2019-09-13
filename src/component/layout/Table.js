import React from 'react';

/**表格布局*/
class Table extends React.Component {

    /**数据结构为{head:["",""],datas:[["",""],["",""]]} */

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

export default Table;