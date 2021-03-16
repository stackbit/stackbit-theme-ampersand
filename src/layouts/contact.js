import React from 'react';
import _ from 'lodash';

import { Layout } from '../components/index';
import { htmlToReact, withPrefix, markdownify } from '../utils';
import FormField from '../components/FormField';

export default class Contact extends React.Component {
    render() {
        const data = _.get(this.props, 'data');
        const config = _.get(data, 'config');
        const page = _.get(this.props, 'page');
        const title = _.get(page, 'title');
        const subtitle = _.get(page, 'subtitle');
        const image = _.get(page, 'img_path');
        const imageAlt = _.get(page, 'img_alt', '');
        const formId = _.get(page, 'form_id');
        const formAction = _.get(page, 'form_action');
        const formFields = _.get(page, 'form_fields');
        const submitLabel = _.get(page, 'submit_label');
        const formHoneypotInputId = formId + '-honeypot';
        const formHoneypotLabelId = formId + '-honeypot-label';
        const formHoneypotName = formId + '-bot-field';
        const markdownContent = _.get(page, 'markdown_content');

        return (
            <Layout page={page} config={config}>
                <article className="post page post-full">
                    <header className="post-header inner-md">
                        <h1 className="post-title">{title}</h1>
                        {subtitle && <div className="post-subtitle">{htmlToReact(subtitle)}</div>}
                    </header>
                    {image && (
                        <div className="post-thumbnail">
                            <img className="thumbnail" src={withPrefix(image)} alt={imageAlt} />
                        </div>
                    )}
                    <div className="post-content inner-md">
                        {markdownContent && markdownify(markdownContent)}
                        <form
                            name={formId}
                            id={formId}
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
                            {_.map(formFields, (field, index) => (
                                <FormField key={index} field={field} />
                            ))}
                            <div className="form-submit">
                                <button type="submit" className="button">{submitLabel}</button>
                            </div>
                        </form>
                    </div>
                </article>
            </Layout>
        );
    }
}
