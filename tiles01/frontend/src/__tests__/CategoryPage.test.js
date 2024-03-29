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
    const mock = jest.fn()
    const consoleSpy = jest.spyOn(console, 'log')
	const wrapper = shallow(<CategoryPage onClick={mock}{...initialProps}/>)
	it('renders one LinkButton element', () => {
	    expect(wrapper.find('LinkButton')).toHaveLength(1);
	});
	it('renders a CharThinking', () => {
	    expect(wrapper.find('CharThinking')).toHaveLength(1);
	});
	it('choose button is disabled before a card is chosen', () => {
	    expect(wrapper.find("LinkButton").props().disabled).toEqual(true)
	});
    it('console shows that trigger is chosen as default when no props is given', () => {
        const wrapperWithoutProps = shallow(<CategoryPage/>)
	    expect(consoleSpy).toHaveBeenCalledWith('No category chosen, trigger chosen as default');
	});
    it('TopContainer displays correct text', () => {
	    expect(wrapper.find('TopContainer').props().text).toEqual('Choose 1 card from this pile to trigger some action');
	});
});
