import {configure, shallow} from "enzyme"
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import ChosenCardsPage from '../Pages/ChosenCardsPage';
import {cleanup} from '@testing-library/react';
import renderer from 'react-test-renderer';
import {BrowserRouter as Router} from "react-router-dom";


afterEach(() => {
    cleanup();
});

configure({
    adapter: new Adapter()
});

const localStorageMock = (function(){
    let store = {}
    return {
    getItem: function(key){
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

describe('ChosenCards Page', () => {
    const wrapper = shallow(<ChosenCardsPage/>)
    it('renders correctly', () => {
        const tree = renderer.create(<Router><ChosenCardsPage/></Router>).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('renders two LinkButton elements', () => {
        expect(wrapper.find('LinkButton')).toHaveLength(2);
    });
    it('renders a CharNormal', () => {
        expect(wrapper.find('CharNormal')).toHaveLength(1);
    });
    it('renders choose-button for trigger, and not things + feedback', () => {
        expect(wrapper.find('.buttonChosenCardsPage').props().category).toEqual('trigger');
        expect(wrapper.find('.buttonChosenCardsPage').props().category).not.toEqual('things');
        expect(wrapper.find('.buttonChosenCardsPage').props().category).not.toEqual('feedback');
    });
    // it('check that choose-button disappears', () => {
    //     const init = {}
    //     const container = shallow(<ChosenCardsPage {...init}/>)
    //     console.log(container.debug())

    //     expect(container.find('.buttonChosenCardsPage').props().category).not.toEqual('trigger');
    // });
    it('renders 1 LinkToPage elements when one card are chosen', () => {
        window.localStorage = localStorageMock
        localStorage.setItem("trigger", "http://localhost:8484/static/media/drop.d20cddd5.png")
        const chosenWrapper = shallow(<ChosenCardsPage/>)
        expect(chosenWrapper.find('LinkToPage')).toHaveLength(1);

    });
    it('renders 3 LinkToPage elements when all cards are chosen', () => {
        window.localStorage = localStorageMock
        localStorage.setItem("trigger", "http://localhost:8484/static/media/drop.d20cddd5.png")
        localStorage.setItem("things", "http://localhost:8484/static/media/bike.4ef9ea3f.png")
        localStorage.setItem("feedback", "http://localhost:8484/static/media/color_change.822c0672.png")
        const chosenWrapper = shallow(<ChosenCardsPage/>)
        expect(chosenWrapper.find('LinkToPage')).toHaveLength(3);

    });
});
