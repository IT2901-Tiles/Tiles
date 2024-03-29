import {configure, shallow} from "enzyme"
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {cleanup} from '@testing-library/react';
import Logo from '../Components/Logo';
import renderer from 'react-test-renderer';

afterEach(() => {
    cleanup();
});

configure({
    adapter: new Adapter()
});

describe('Logo', () => {
    const wrapper = shallow(<Logo/>)
    it('renders correctly', () => {
        const tree = renderer.create(<Logo/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('contains a h1 element', () => {
        expect(wrapper.find('h1')).toHaveLength(1);
    });
    it('h1 renders correctly', () => {
        const heading = wrapper.find('h1');
        expect(heading.text()).toEqual('TILES');
    });
});