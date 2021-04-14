import {configure, shallow} from "enzyme"
import Adapter from 'enzyme-adapter-react-16';
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
});

describe('AudioOnAnimations component if vibrate is chosen as feedback', () => {
    const init = {feedbackCard: 'vibrate', muted:'false'};
    const container = shallow(<AudioOnAnimations {...init}/>);
    it('there exists an audio element and a button', () => {
        expect(container.find('audio')).toHaveLength(1);
        expect(container.find('button')).toHaveLength(1);
    });
    it('plays correct sound', () => {
        expect(container.find('source').props()).toEqual({"src": "cellphone_vibrate.wav", "type": "audio/wav"});
    });   
});