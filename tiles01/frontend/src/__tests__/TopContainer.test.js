import {configure, shallow} from "enzyme"
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {cleanup} from '@testing-library/react';
import TopContainer from '../Components/TopContainer';
import renderer from 'react-test-renderer';

afterEach(() => {
    cleanup();
});

configure({
    adapter: new Adapter()
});

describe('TopContainer with no props', () => {
    const wrapper = shallow(<TopContainer/>)
    it('renders correctly', () => {
        const tree = renderer.create(<TopContainer/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('contains a Logo element', () => {
        expect(wrapper.find('Logo')).toHaveLength(1);
    });
    it('contains a p element', () => {
        expect(wrapper.find('p')).toHaveLength(1);
        expect(wrapper.find('p').text()).toEqual("");
    });
});

describe('TopContainer with props', () => {
    const initialProps = {text: 'hello, this is a test'};

    const container = shallow(<TopContainer {...initialProps} />);

    it('should have correct props for p element', () => {
        expect(container.find('p').props()).toEqual({"children": "hello, this is a test"});
    })
})