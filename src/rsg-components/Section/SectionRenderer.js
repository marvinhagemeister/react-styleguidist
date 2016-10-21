import React, { PropTypes } from 'react';

const SectionRenderer = ({ name, content, components }) => {
	return (
		<div className="rsg-section">
			<header className="rsg-section-header rsg-font">
				<h1 className="rsg-section-heading" id={name}>
					<a className="rsg-section-anchor" href={'#' + name}></a>
					{name}
				</h1>
			</header>
			<div>
				{content}
			</div>
			<div>
				{components}
			</div>
		</div>
  );
};

SectionRenderer.propTypes = {
	name: PropTypes.string.isRequired,
	content: PropTypes.node,
	components: PropTypes.object,
};

export default SectionRenderer;
