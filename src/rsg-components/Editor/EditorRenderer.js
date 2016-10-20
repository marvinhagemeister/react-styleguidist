import React, { PropTypes } from 'react';

const EditorRenderer = ({ children }) => (
	<div className="CodeMirror">
		{children}
	</div>
);

EditorRenderer.propTypes = {
	children: PropTypes.node.isRequired,
};

export default EditorRenderer;
