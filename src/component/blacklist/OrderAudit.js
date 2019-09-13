import React from 'react';

import FrameworkContainer from '../layout/FrameworkContainer';
import OrderFrom from '../part/OrderForm.js';
import BaseOrderPart from '../part/BaseOrderPart';
import Collapse from '../layout/Collapse';
import CollapseItem from '../layout/CollapseItem';
import Table from '../layout/Table';

class OrderAudit extends React.Component {

    render(){

        return (
            <FrameworkContainer>
                <OrderFrom title="演示系统" btnName="泽华大哥" />
                <BaseOrderPart title="基础信息" />
                <Collapse>
                    <CollapseItem title="测试表格1">
                        <Table head={["姓名","年龄","成绩"]} datas={[["lele",29,80],["caige",26,89],["taoge",30,90]]} />
                    </CollapseItem>
                    <CollapseItem title="测试表格2">
                        <Table head={["姓名","年龄","成绩"]} datas={[["lele",29,80],["caige",26,89],["taoge",30,90]]} />
                    </CollapseItem>
                </Collapse>
            </FrameworkContainer>
        );

    }
}
export default OrderAudit;