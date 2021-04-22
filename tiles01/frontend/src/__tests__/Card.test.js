import {configure, shallow} from "enzyme"
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
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
    it('has correct imageClass', () => {
        const initialProps = {
            active: "1",
            id: "1",
        }
        const container = shallow(<Card {...initialProps} />);
        expect(container.find('img').props().className).toEqual("card card-active");
    });

});