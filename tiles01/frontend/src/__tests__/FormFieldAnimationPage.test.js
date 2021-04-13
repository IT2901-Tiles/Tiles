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
    // it('textarea calls a function on change', () => {
    //     const testProps = {
    //         OnChange: jest.fn()
    //     };
    //     const container = shallow(<FormFieldAnimationPage {...testProps}/>);
    //     const event = {target: {value: "sometext"}};
    //     container.find('textarea').simulate('change', event);
    //     expect(testProps.OnChange).toHaveBeenLastCalledWith(event);
    // });

    // it('Test click event', () => {
    //     const mockedDownloadFile = jest.fn();
    
    //     const container = shallow((<FormFieldAnimationPage onChange={mockedDownloadFile}/>));
    //     container.find('textarea').simulate('change');
    //     expect(mockedDownloadFile.mock.calls.length).toEqual(1);
    //   });

    // it('button calls a function when clicked', () => {
    //     const mockedDownloadFile = jest.fn();
    //     render(<button onClick={mockedDownloadFile} className="textButtonAnimationPage">Download</button>);
    //     userEvent.click(screen.getByRole('button'));
    //     expect(mockedDownloadFile).toHaveBeenCalledTimes(1);
    // });
    // it('textarea calls a function on change', () => {
    //     const mockedSetInput = jest.fn();
    //     render(<textarea id="textBoxAnimationPage" placeholder="Write your idea here..." onChange={mockedSetInput} />);
    //     userEvent.type(screen.getByRole('textbox'), 'My great idea');
    //     expect(mockedSetInput).toHaveBeenCalledTimes(13);
    // });  
});
