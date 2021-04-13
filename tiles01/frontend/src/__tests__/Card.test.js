import {configure, shallow} from "enzyme"
import Adapter from 'enzyme-adapter-react-16';
import {cleanup} from '@testing-library/react';
import Card from '../Components/Card';
import renderer from 'react-test-renderer';


afterEach(() => {
    cleanup();
});

configure({
    adapter: new Adapter()
});

describe('Card', () => {
    const wrapper = shallow(<Card/>)
    it('renders correctly', () => {
        const tree = renderer.create(<Card/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('contains an image', () => {
        expect(wrapper.find('img')).toHaveLength(1);
    });
});