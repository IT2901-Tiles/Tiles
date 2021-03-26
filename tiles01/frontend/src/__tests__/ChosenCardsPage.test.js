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

describe('Animation page', () => {
    it('renders correctly', () => {
        shallow(<ChosenCardsPage/>);
    })
});