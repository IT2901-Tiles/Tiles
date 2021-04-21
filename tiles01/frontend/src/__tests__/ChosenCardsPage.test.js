import {configure, shallow} from "enzyme"
import Adapter from 'enzyme-adapter-react-16';
import ChosenCardsPage from '../Pages/ChosenCardsPage';
import {cleanup} from '@testing-library/react';
import renderer from 'react-test-renderer';
import {BrowserRouter as Router} from "react-router-dom";


afterEach(() => {
    cleanup();
});

configure({
    adapter: new Adapter()
});

describe('ChosenCards Page', () => {
    const wrapper = shallow(<ChosenCardsPage/>)
    it('renders correctly', () => {
        const tree = renderer.create(<Router><ChosenCardsPage/></Router>).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('renders two LinkButton elements', () => {
        expect(wrapper.find('LinkButton')).toHaveLength(2);
    });
    it('renders a CharNormal', () => {
        expect(wrapper.find('CharNormal')).toHaveLength(1);
    });
    it('renders choose-button for trigger, and not things + feedback', () => {
        expect(wrapper.find('.buttonChosenCardsPage').props().category).toEqual('trigger');
        expect(wrapper.find('.buttonChosenCardsPage').props().category).not.toEqual('things');
        expect(wrapper.find('.buttonChosenCardsPage').props().category).not.toEqual('feedback');
    });
    // it('check that choose-button disappears', () => {
    //     const init = {}
    //     const container = shallow(<ChosenCardsPage {...init}/>)
    //     console.log(container.debug())

    //     expect(container.find('.buttonChosenCardsPage').props().category).not.toEqual('trigger');
    // });
});
