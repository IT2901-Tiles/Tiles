import {configure, shallow} from "enzyme"
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import AnimationPage from '../Pages/AnimationPage';
import {cleanup} from '@testing-library/react';

afterEach(() => {
    cleanup();
});

configure({
    adapter: new Adapter()
});

const localStorageMock = (function(){
    let store = {}
    return {getItem: function(key){
        return store[key] || null
    },
    setItem: function(key, value){
        store[key] = value.toString()
    },
    removeItem: function(key){
        delete store[key]
    }, 
    clear: function(){
        store = {}
    }}
})()

describe('Animation page', () => {
    window.localStorage = localStorageMock
    localStorage.setItem("trigger", "http://localhost:8484/static/media/drop.d20cddd5.png")
    localStorage.setItem("things", "http://localhost:8484/static/media/bike.4ef9ea3f.png")
    localStorage.setItem("feedback", "http://localhost:8484/static/media/color_change.822c0672.png")
    const wrapper = shallow(<AnimationPage/>);
    it('renders a TopContainer', () => {
        expect(wrapper.find('TopContainer')).toHaveLength(1);
    });
    it('renders a CharHappy', () => {
        expect(wrapper.find('CharHappy')).toHaveLength(1);
    });
    it('renders a formfield', () => {
        expect(wrapper.find('FormFieldAnimationPage')).toHaveLength(1);
    });
    it('renders a audiofield', () => {
        expect(wrapper.find('AudioFieldAnimationPage')).toHaveLength(1);
    });
    it('renders three cards', () => {
        expect(wrapper.find('.gridAnimationCards').children()).toHaveLength(3);
    })
    it('getCardName function gets correct name', () => {
        expect(wrapper.find('FormFieldAnimationPage').props().triggerCard).toEqual("drop");
        expect(wrapper.find('FormFieldAnimationPage').props().thingCard).toEqual("bike");
        expect(wrapper.find('FormFieldAnimationPage').props().feedbackCard).toEqual("color_change");
    })
});
