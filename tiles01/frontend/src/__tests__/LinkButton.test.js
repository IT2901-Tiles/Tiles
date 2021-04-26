import {configure, shallow} from "enzyme"
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {cleanup} from '@testing-library/react';
import LinkButton from '../Components/LinkButton';
import renderer from 'react-test-renderer';
import {BrowserRouter as Router} from "react-router-dom";


afterEach(() => {
    cleanup();
});

configure({
    adapter: new Adapter()
});

describe('LinkButton', () => {
    const mock = jest.fn()
    const wrapper = shallow(<LinkButton onClick={mock} category="things"/>)
    it('renders correctly', () => {
        const tree = renderer.create(<Router><LinkButton/></Router>).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('contains a link element', () => {
        expect(wrapper.find('Link')).toHaveLength(1);
    });
    it('contains a button element', () => {
        expect(wrapper.find('Button')).toHaveLength(1);
    });
    it('Button triggers function', () => {
        wrapper.find('Button').simulate('click')
        expect(mock).toHaveBeenCalled()
    });
    it('Right color is chosen, based on category prop, things', () => {
        expect(wrapper.find('Link').props().to.state.color).toEqual("#D64539");
    });
    it('Right color is chosen, based on category prop, animation', () => {
        const colorWrapper = shallow(<LinkButton onClick={mock} category="animation"/>)
        expect(colorWrapper.find('Link').props().to.state.color).toEqual("#84AD64");
    });
});