// import {configure, shallow} from "enzyme"
// import Adapter from 'enzyme-adapter-react-16';
// import {cleanup} from '@testing-library/react';
// import CategoryPage from '../Pages/CategoryPage';
// import renderer from 'react-test-renderer';

// afterEach(() => {
//     cleanup();
// });

// configure({
//     adapter: new Adapter()
// });

// describe('CategoryPage with props', () => {
//     const initialProps = {
//         category: 'trigger',
//     };

//     const conatiner = shallow(<CategoryPage {...initialProps} />);

//     it('should have correct props for LinkButton element', () => {
//         expect(conatiner.find('LinkButton').props()).toEqual({"children": "hello, this is a test"});
//     })
// })