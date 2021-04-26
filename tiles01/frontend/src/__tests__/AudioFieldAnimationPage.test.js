import {configure, shallow} from "enzyme"
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {cleanup} from '@testing-library/react';
import renderer from 'react-test-renderer';
import AudioFieldAnimationPage from "../Components/AudioFieldAnimationPage";


afterEach(() => {
    cleanup();
});

configure({
    adapter: new Adapter()
});

describe('AudioFieldAnimationPage component', () => {
    const mock = jest.fn()
    const wrapper = shallow(<AudioFieldAnimationPage onClick={mock}/>)
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




