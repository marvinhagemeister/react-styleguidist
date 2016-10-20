import React, { PropTypes } from 'react';
import cx from 'classnames';

const CodeRenderer = ({ className, children }) => (
	<code className={cx('rsg-code', className)}>{children}</code>
);

CodeRenderer.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node,
};

export default CodeRenderer;
