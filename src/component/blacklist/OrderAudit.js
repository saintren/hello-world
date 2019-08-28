import React from 'react';

import FrameworkContainer from '../layout/FrameworkContainer';
import OrderFrom from '../part/OrderForm.js';
import BaseOrderPart from '../part/BaseOrderPart';
import Collapse from '../layout/Collapse';
import CollapseItem from '../layout/CollapseItem';

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
                    <CollapseItem title="test" content={<BaseOrderPart title="Base Info" />}></CollapseItem>
                </Collapse>
            </FrameworkContainer>
        );

    }
}
export default OrderAudit;