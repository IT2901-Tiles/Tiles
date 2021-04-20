import {configure, shallow} from "enzyme"
import Adapter from 'enzyme-adapter-react-16';
import {cleanup} from '@testing-library/react';
import CharThinking from '../Components/CharThinking';
import renderer from 'react-test-renderer';


afterEach(() => {
    cleanup();
});

configure({
    adapter: new Adapter()
});

describe('CharThinking', () => {
    const wrapper = shallow(<CharThinking/>)
    it('renders correctly', () => {
        const tree = renderer.create(<CharThinking/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('renders Character', () => {
        expect(wrapper.find('Character')).toHaveLength(1);
    })
});