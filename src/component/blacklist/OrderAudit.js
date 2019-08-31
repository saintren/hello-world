import React from 'react';

import FrameworkContainer from '../layout/FrameworkContainer';
import OrderFrom from '../part/OrderForm.js';
import BaseOrderPart from '../part/BaseOrderPart';
import Collapse from '../layout/Collapse';
import CollapseItem from '../layout/CollapseItem';
import Table from '../layout/Table';

class OrderAudit extends React.Component {

    constructor(props) {
        super(props);
    }

    render(){

        return (
            <FrameworkContainer>
                <OrderFrom title="Order Audit" btnName="Order+" />
                <BaseOrderPart title="Base Info" />
                <Collapse>
                    <CollapseItem title="test">
                        <BaseOrderPart title="Base Info" />
                    </CollapseItem>
                    <CollapseItem title="table test">
                        <Table head={["姓名","年龄","成绩"]} datas={[["lele",29,80],["caige",26,89],["taoge",30,90]]} />
                    </CollapseItem>
                </Collapse>
            </FrameworkContainer>
        );

    }
}
export default OrderAudit;