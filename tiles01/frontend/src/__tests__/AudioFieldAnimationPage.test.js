import {configure, shallow} from "enzyme"
import Adapter from 'enzyme-adapter-react-16';
import {cleanup} from '@testing-library/react';
import AudioFieldAnimationPage from "../Components/AudioFieldAnimationPage";

afterEach(() => {
    cleanup();
});

configure({
    adapter: new Adapter()
});

describe('AudioFieldAnimationPage component', () => {
    it('disables the button', () => {
        const wrapper = shallow(<AudioFieldAnimationPage/>)  
    });
});




