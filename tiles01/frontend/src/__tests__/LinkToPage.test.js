import {configure, shallow} from "enzyme"
import Adapter from 'enzyme-adapter-react-16';
import {cleanup} from '@testing-library/react';
import LinkToPage from '../Components/LinkToPage';
import renderer from 'react-test-renderer';
import {BrowserRouter as Router} from "react-router-dom";

afterEach(() => {
    cleanup();
});

configure({
    adapter: new Adapter()
});

describe('LinkToPage', () => {
    const wrapper = shallow(<LinkToPage/>)
    it('renders correctly', () => {
        const tree = renderer.create(<Router><LinkToPage/></Router>).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('contains a link element', () => {
        expect(wrapper.find('Link')).toHaveLength(1);
    });
    it('contains an img element', () => {
        expect(wrapper.find('img')).toHaveLength(1);
    });
    it('changes colour', () => {
        const initialProps = {
            category: "things",
        }
        const container = shallow(<LinkToPage {...initialProps} />);
        expect(container.find('Link').props().to.state.color).toEqual("#D64539");
    });
});

