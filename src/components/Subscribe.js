import React from 'react';
import _ from 'lodash';

import { htmlToReact } from '../utils';
import SubscribeForm from './SubscribeForm';

export default class Subscribe extends React.Component {
    render() {
        const config = _.get(this.props, 'config');
        const footer = _.get(config, 'footer');
        const subscribeTitle = _.get(footer, 'subscribe_title');
        const subscribeContent = _.get(footer, 'subscribe_content');
        const subscribeAction = _.get(footer, 'subscribe_action');

        return (
            <section className="subscribe outer">
                <div className="inner-sm">
                    {subscribeTitle && <h2 className="subscribe-title">{subscribeTitle}</h2>}
                    {subscribeContent && <p className="subscribe-text">{htmlToReact(subscribeContent)}</p>}
                    <SubscribeForm action={subscribeAction} />
                </div>
            </section>
        );
    }
}
