import {configure, shallow} from "enzyme"
import Adapter from 'enzyme-adapter-react-16';
import NotFoundPage from '../Pages/NotFoundPage';
import {cleanup} from '@testing-library/react';

afterEach(() => {
    cleanup();
});

configure({
    adapter: new Adapter()
});

describe('Not Found Page', () => {
    const wrapper = shallow(<NotFoundPage/>)
    it('renders correctly', () => {
        shallow(<NotFoundPage/>);
    });
    it('renders two LinkButton elements', () => {
        expect(wrapper.find('LinkButton')).toHaveLength(2);
    });
    it('renders the p element correct', () => {
        const p = wrapper.find('p');
        expect(p).toHaveLength(1);
        expect(p.text()).toEqual('It seems like you are a bit lost. Let me help you find your way back! ');
    });
    it('renders the h1 element correct', () => {
        const heading = wrapper.find('h1');
        expect(heading).toHaveLength(1);
        expect(heading.text()).toEqual('Page not found');
    });
    it('renders eleven images', () => {
        expect(wrapper.find('img')).toHaveLength(11);
    });
});