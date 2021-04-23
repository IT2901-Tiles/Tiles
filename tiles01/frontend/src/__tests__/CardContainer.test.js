import {configure, shallow} from "enzyme"	
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {cleanup} from '@testing-library/react';
import CardContainer from '../Components/CardContainer';
import renderer from 'react-test-renderer';
	
afterEach(() => {
	cleanup();
});

configure({
	adapter: new Adapter()
});

describe('CardContainer', () => {
	const mockFunction = jest.fn()
	const initialProps = {
	    category: "trigger",
	    onSelect: mockFunction,
	}
	const wrapper = shallow(<CardContainer {...initialProps}/>)
	it('renders correctly', () => {
	    const tree = renderer.create(<CardContainer {...initialProps}/>).toJSON();
	    expect(tree).toMatchSnapshot();
	});
	it('trigger category contains 3 cards', () => {
	    expect(wrapper.find('Card')).toHaveLength(3);
	});
	it('changes number of cards when category changes', () => {
	    const initialProps = {
	        category: "feedback",
	        onSelect: mockFunction,
	    }
	    const container = shallow(<CardContainer {...initialProps} />);
	    expect(container.find('Card')).toHaveLength(2);
	});
}); 
