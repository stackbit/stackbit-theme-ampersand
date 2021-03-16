import React from 'react';
import _ from 'lodash';

export default class SubscribeForm extends React.Component {
    render() {
        const formAction = _.get(this.props, 'action');
        const formId = 'subscribeForm';
        const formHoneypotInputId = formId + '-honeypot';
        const formHoneypotLabelId = formId + '-honeypot-label';
        const formHoneypotName = formId + '-bot-field';

        return (
            <form
                name={formId}
                id={formId}
                className="subscribe-form"
                {...(formAction ? ({ action: formAction }) : null)}
                method="POST"
                data-netlify="true"
                data-netlify-honeypot={formHoneypotName}
            >
                <div className="screen-reader-text">
                    <label id={formHoneypotLabelId} htmlFor={formHoneypotInputId}>
                        Don't fill this out if you're human: 
                        <input aria-labelledby={formHoneypotLabelId} id={formHoneypotInputId} name={formHoneypotName} />
                    </label>
                </div>
                <input type="hidden" name="form-name" value={formId} />
                <div className="form-group">
                    <label>
                        <span className="screen-reader-text">Email address</span>
                        <input type="email" name="email" placeholder="Your email address" required />
                    </label>
                </div>
                <button className="button" type="submit">Subscribe</button>
            </form>
        );
    }
}
