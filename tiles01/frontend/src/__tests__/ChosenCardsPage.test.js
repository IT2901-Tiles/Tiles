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
});