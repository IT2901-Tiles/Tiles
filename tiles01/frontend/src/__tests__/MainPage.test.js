import {configure, shallow} from "enzyme"
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import MainPage from '../Pages/MainPage';
import {cleanup} from '@testing-library/react';
import renderer from 'react-test-renderer';
import {BrowserRouter as Router} from "react-router-dom";

afterEach(() => {
    cleanup();
});

configure({
    adapter: new Adapter()
});

describe('Main page', () => {
    const wrapper = shallow(<MainPage/>)
    it('renders correctly', () => {
        const tree = renderer.create(<Router><MainPage/></Router>).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('renders a LinkButton', () => {
        expect(wrapper.find('LinkButton')).toHaveLength(1);
    });
  
    it('renders a p element', () => {
        const paragraph = wrapper.find('p');
        expect(paragraph.text()).toEqual('Welcome to the Tiles Internet of Things Invention! Pick one card from three different categories and create some smart creations.Click on the button below to start!');
        expect(paragraph).toHaveLength(1);
    });
    it('renders two img elements', () => {
        expect(wrapper.find('img')).toHaveLength(2);
    });
    it('renders a CharNormalMainPage', () => {
        expect(wrapper.find('CharNormalMainPage')).toHaveLength(1);
    });
});