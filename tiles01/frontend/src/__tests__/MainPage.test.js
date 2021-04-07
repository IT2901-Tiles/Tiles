import {configure, shallow} from "enzyme"
import Adapter from 'enzyme-adapter-react-16';
import MainPage from '../Pages/MainPage';
import {cleanup} from '@testing-library/react';

afterEach(() => {
    cleanup();
});

configure({
    adapter: new Adapter()
});

describe('Animation page', () => {
    const wrapper = shallow(<MainPage/>)
    it('renders correctly', () => {
        shallow(<MainPage/>);
    });
    it('renders a LinkButton', () => {
        expect(wrapper.find('LinkButton')).toHaveLength(1);
    });
    it('on click gives these props', () => {
        wrapper.find('LinkButton').simulate('click');
        expect(wrapper.find('LinkButton').props()).toEqual({"size": "Large", "target": "/cards", "title": "Let's begin!"});
    });
    it('renders a p element', () => {
        const paragraph = wrapper.find('p');
        expect(paragraph.text()).toEqual('Welcome to the Tiles Internet of Things Invention! Let’s create some smart creations! ');
        expect(paragraph).toHaveLength(1);
    });
});