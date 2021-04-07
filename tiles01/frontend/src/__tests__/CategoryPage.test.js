import {configure, shallow} from "enzyme"
import Adapter from 'enzyme-adapter-react-16';
import CategoryPage from '../Pages/CategoryPage';
import {cleanup} from '@testing-library/react';

afterEach(() => {
    cleanup();
});

configure({
    adapter: new Adapter()
});

// describe('Category page', () => {
//     const wrapper = shallow(<CategoryPage/>);
//     it('renders a card', () => {
//         wrapper.find('CardContainer').simulate('select');
//         expect(wrapper.find('CardContainer')).toHaveLength(1);
//     });
// });

// describe('Animation page', () => {
//     it('renders correctly', () => {
//         shallow(<CategoryPage/>);
//     })
// });

// trur d her må mockes
// https://github.com/storybookjs/storybook/issues/2487