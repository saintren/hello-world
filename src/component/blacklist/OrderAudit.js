import React from 'react';

import FrameworkContainer from '../container/FrameworkContainer';
import OrderFrom from '../part/OrderForm.js';

import './css/extend.css';
import BaseOrderPart from '../part/BaseOrderPart';

class OrderAudit extends React.Component {

    constructor(props) {
        super(props);
    }

    render(){

        return (
            <FrameworkContainer>
                <OrderFrom title="Order Audit" btnName="Order+" />
                <BaseOrderPart title="Base Info" />
            </FrameworkContainer>
        );

    }
}
export default OrderAudit;