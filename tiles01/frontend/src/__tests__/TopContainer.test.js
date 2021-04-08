import {configure, shallow} from "enzyme"
import Adapter from 'enzyme-adapter-react-16';
import {cleanup} from '@testing-library/react';
import TopContainer from '../Components/TopContainer';

afterEach(() => {
    cleanup();
});

configure({
    adapter: new Adapter()
});

describe('TopContainer with no props', () => {
    const wrapper = shallow(<TopContainer/>)
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

    const conatiner = shallow(<TopContainer {...initialProps} />);

    it('should have props for p element', () => {
        expect(conatiner.find('p').props()).toEqual({"children": "hello, this is a test"});
    })
})