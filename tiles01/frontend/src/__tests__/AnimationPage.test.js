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
    const wrapper = shallow(<AnimationPage/>);
    // it('renders correctly', () => {
    //     const tree = renderer.create(<AnimationPage/>).toJSON();
    //     expect(tree).toMatchSnapshot();
    // });
    it('renders a TopContainer', () => {
        expect(wrapper.find('TopContainer')).toHaveLength(1);
    });
    it('renders an AnimationsPreview', () => {
        expect(wrapper.find('AnimationsPreview')).toHaveLength(1);
    });
    it('renders a CharHappy', () => {
        expect(wrapper.find('CharHappy')).toHaveLength(1);
    });
   
    
});
