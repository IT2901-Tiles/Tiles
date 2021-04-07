import {configure, shallow} from "enzyme"
import Adapter from 'enzyme-adapter-react-16';
import ChosenCardsPage from '../Pages/ChosenCardsPage';
import {cleanup} from '@testing-library/react';

afterEach(() => {
    cleanup();
});

configure({
    adapter: new Adapter()
});

describe('ChosenCards Page', () => {
    const wrapper = shallow(<ChosenCardsPage/>)
    it('renders correctly', () => {
        shallow(<ChosenCardsPage/>);
    });
    it('renders two LinkButton elements', () => {
        expect(wrapper.find('LinkButton')).toHaveLength(2);
    });
});