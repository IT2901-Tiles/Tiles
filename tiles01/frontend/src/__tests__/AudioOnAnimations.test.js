import {configure, shallow} from "enzyme"
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {cleanup} from '@testing-library/react';
import AudioOnAnimations from '../Components/AudioOnAnimations';
import renderer from 'react-test-renderer';


afterEach(() => {
    cleanup();
});

configure({
    adapter: new Adapter()
});

describe('AudioOnAnimations component', () => {
    const wrapper = shallow(<AudioOnAnimations/>)
    it('renders correctly', () => {
        const tree = renderer.create(<AudioOnAnimations/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('there exists a placeholder-button if vibrate is not chosen as the feedback-card', () => {
        expect(wrapper.find('button')).toHaveLength(1);
        expect(wrapper.find('button').props().id).toEqual('muteButtonPlaceholder')
    });
    it('there does not exist a audio element if the feedback card vibrate is not selected', () => {
        expect(wrapper.find('audio')).toHaveLength(0);
    });
});

describe('AudioOnAnimations component if vibrate is chosen as feedback', () => {
    const init = {feedbackCard: 'vibrate', muted: 'false'};
    const mockFunction = jest.fn()
    const container = shallow(<AudioOnAnimations onClick={mockFunction}{...init}/>);
    it('there exists an audio element and a button', () => {
        expect(container.find('audio')).toHaveLength(1);
        expect(container.find('button')).toHaveLength(1);
    });
    it('plays correct sound', () => {
        expect(container.find('source').props()).toEqual({"src": "cellphone_vibrate.wav", "type": "audio/wav"});
    });   
});