import {configure, shallow, mount} from "enzyme"
import Adapter from 'enzyme-adapter-react-16';
import FormFieldAnimationPage from '../Components/FormFieldAnimationPage';
import {cleanup} from '@testing-library/react';
import renderer from 'react-test-renderer';

afterEach(() => {
    cleanup();
});

configure({
    adapter: new Adapter()
});

describe('FormFieldAnimationPage component', () => {
    const wrapper = shallow(<FormFieldAnimationPage/>);
    it('renders correctly', () => {
        const tree = renderer.create(<FormFieldAnimationPage/>);
        expect(tree).toMatchSnapshot();
    });
    it('renders a "Download"-button element', () => {
        expect(wrapper.find('button')).toHaveLength(1);
        expect(wrapper.find('button').text()).toEqual('Download');
    });
    it('renders a textarea', () => {
        expect(wrapper.find('textarea')).toHaveLength(1);
    }); 
});
