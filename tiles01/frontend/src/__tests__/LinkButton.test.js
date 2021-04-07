import {configure, shallow} from "enzyme"
import Adapter from 'enzyme-adapter-react-16';
import {cleanup} from '@testing-library/react';
import LinkButton from '../Components/LinkButton';

afterEach(() => {
    cleanup();
});

configure({
    adapter: new Adapter()
});

describe('LinkButton', () => {
    const wrapper = shallow(<LinkButton/>)
    it('contains a link element', () => {
        expect(wrapper.find('Link')).toHaveLength(1);
    });
    it('contains a button element', () => {
        expect(wrapper.find('Button')).toHaveLength(1);
    });
});