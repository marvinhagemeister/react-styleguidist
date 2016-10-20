import { shallow } from 'enzyme';
import unexpected from 'unexpected';
import unexpectedReact from 'unexpected-react';
import React from 'react';
import EditorRenderer from './EditorRenderer';

const expect = unexpected.use(unexpectedReact);

describe('Editor', () => {
	it('renderer should render editor', () => {
		const editor = <div>editor</div>;
		const actual = shallow(
			<EditorRenderer>{editor}</EditorRenderer>
		);

		expect(actual.node, 'to contain',
			<div>{editor}</div>
		);
	});
})
