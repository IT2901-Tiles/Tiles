import {configure, shallow} from "enzyme"
import Adapter from 'enzyme-adapter-react-16';
import {cleanup} from '@testing-library/react';
import LinkButton from '../Components/LinkButton';
import renderer from 'react-test-renderer';
import {BrowserRouter as Router} from "react-router-dom";


afterEach(() => {
    cleanup();
});

configure({
    adapter: new Adapter()
});

describe('LinkButton', () => {
    const wrapper = shallow(<LinkButton/>)
    it('renders correctly', () => {
        const tree = renderer.create(<Router><LinkButton/></Router>).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('contains a link element', () => {
        expect(wrapper.find('Link')).toHaveLength(1);
    });
    it('contains a button element', () => {
        expect(wrapper.find('Button')).toHaveLength(1);
    });
});