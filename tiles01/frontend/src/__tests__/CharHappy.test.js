import {configure, shallow} from "enzyme"
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {cleanup} from '@testing-library/react';
import CharHappy from '../Components/CharHappy';
import renderer from 'react-test-renderer';


afterEach(() => {
    cleanup();
});

configure({
    adapter: new Adapter()
});

describe('CharHappy', () => {
    const wrapper = shallow(<CharHappy/>)
    it('renders correctly', () => {
        const tree = renderer.create(<CharHappy/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('renders Character', () => {
        expect(wrapper.find('Character')).toHaveLength(1);
    })
});