import {configure, shallow} from "enzyme"
import Adapter from 'enzyme-adapter-react-16';
import {cleanup} from '@testing-library/react';
import Logo from '../Components/Logo';

afterEach(() => {
    cleanup();
});

configure({
    adapter: new Adapter()
});

describe('Logo', () => {
    const wrapper = shallow(<Logo/>)
    it('contains a h1 element', () => {
        expect(wrapper.find('h1')).toHaveLength(1);
    });
    it('h1 renders correctly', () => {
        const heading = wrapper.find('h1');
        expect(heading.text()).toEqual('TILES');
    });
});