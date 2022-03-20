import React from "react";
import { shallow, mount } from "enzyme";
import SyncID from '../../scenes/HomeSPA/SyncID';
import toJson from "enzyme-to-json";
// import { withHooks } from 'jest-react-hooks-shallow';

describe("renders SyncID page without useEffect hooke", () => {
    it("SyncID renders", () => {
        shallow(<SyncID/>);
    });
});

describe("renders SyncID page", () => {
    let page;
    beforeEach(() => {
        // look up what clearAllMocks is and you're just going to have to work around the it failing on first call when in test mode.
        // withHooks(() => {
            // page = shallow(<SyncID isTest={true}/>);
            page = mount(<SyncID />);
        // });
    });

    it("SyncID loads", () => {
        page;
    });
    it("props class name matches", () => {
        // expect(page.props().className).toEqual("content sync-id-page");
    });
    it("matches snapshot", () => {
        expect(toJson(page)).toMatchSnapshot();
    });
    it("pop up renders", () => {
        expect(page.find(".popup").text()).toEqual("Coming Soon!×This page is still in development so submitting won't actually do anything. But feel free to mess around!");
    });
    it("pop up renders", () => {
        expect(page.find(".popup").hasClass("popup-show")).toEqual(true);
        expect(page.find(".popup").hasClass("popup-hide")).toEqual(false);
    });
    it("can dismiss popup", () => {
        page.find(".popup").find(".popup-card").find("#close").simulate("click");
        expect(page.find(".popup").hasClass("popup-show")).toEqual(false);
        expect(page.find(".popup").hasClass("popup-hide")).toEqual(true);
    });
});
