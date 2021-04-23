import {configure, shallow} from "enzyme"	
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {cleanup} from '@testing-library/react';
import CategoryPage from '../Pages/CategoryPage';
	
afterEach(() => {
	cleanup();
});
configure({
	adapter: new Adapter()
});
describe('CategoryPage', () => {
	const initialProps = {
        location: { 
            state: { 
                category: "trigger", 
                color: "blue", 
                card: ""
            }
        }
	}
	const wrapper = shallow(<CategoryPage {...initialProps}/>)
	it('renders one LinkButton element', () => {
	    expect(wrapper.find('LinkButton')).toHaveLength(1);
	});
	it('renders a CharThinking', () => {
	    expect(wrapper.find('CharThinking')).toHaveLength(1);
	});
	it('choose button is disabled before a card is chosen', () => {
	    expect(wrapper.find("LinkButton").props().disabled).toEqual(true)
	});
});
