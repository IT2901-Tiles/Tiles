import {configure, shallow} from "enzyme"
import Adapter from 'enzyme-adapter-react-16';
import AnimationPage from '../Pages/AnimationPage';
import {cleanup} from '@testing-library/react';

afterEach(() => {
    cleanup();
});

configure({
    adapter: new Adapter()
});

describe('Animation page', () => {
    it('renders correctly', () => {
        shallow(<AnimationPage/>);
    })
});
