import React, { PropTypes } from 'react';
import EditorRenderer from './EditorRenderer';

const Editor = ({ code }) => {
	return (
		<EditorRenderer>
			<div className="CodeMirror">
				<div className="CodeMirror-scroll">
					<pre className="CodeMirror-lines">{code}</pre>
				</div>
			</div>
		</EditorRenderer>);
};

Editor.propTypes = {
	code: PropTypes.string.isRequired,
};

export default Editor;
