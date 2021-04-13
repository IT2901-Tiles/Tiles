import {configure, shallow} from "enzyme"
import Adapter from 'enzyme-adapter-react-16';
import {screen, cleanup, render} from '@testing-library/react';
import renderer from 'react-test-renderer';
import AudioFieldAnimationPage from "../Components/AudioFieldAnimationPage";
import userEvent from '@testing-library/user-event';


afterEach(() => {
    cleanup();
});

configure({
    adapter: new Adapter()
});

describe('AudioFieldAnimationPage component', () => {
    const wrapper = shallow(<AudioFieldAnimationPage/>)
    it('renders correctly', () => {
        const tree = renderer.create(<AudioFieldAnimationPage/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('renders three buttons', () => {
        expect(wrapper.find('Button')).toHaveLength(3);
    });
    it('renders an audio element', () => {
        expect(wrapper.find('audio')).toHaveLength(1);
    });
    
    
});




