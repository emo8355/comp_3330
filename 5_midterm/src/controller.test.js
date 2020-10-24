import React from "react";
import App from "./App";
import { mount, shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Todos from "./components/Todos";

configure({ adapter: new Adapter() });

const wrapper = mount(<App />);

describe("Test whether the component render correctly", () => {
	it("renders without crashing", () => {
		wrapper;
	});

	it("App render all todo tasks component successfully ", () => {
		expect(wrapper.find(".task").length).toEqual(3);
	});

	it("App default run in view mode", () => {
		expect(wrapper.find("#viewTemplate").length).toEqual(3);
	});

	it("Task delete successfully", () => {
		wrapper.find(".task").first().find(".delBtn").simulate("click");
		const remainTask = wrapper.find(".task").length;
		expect(remainTask).toEqual(2);
	});

	it("filter button work properly", () => {
		//one is deleted already
		wrapper.find(".toggler").last().simulate("click");
		const remainTask = wrapper.find(".task").length;
		expect(remainTask).toEqual(0);
	});
});
