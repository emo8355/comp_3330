import React from "react";
import renderer from "react-test-renderer";
import App from "./App";

it("renders correctly when there are no items", () => {
	const testSample = renderer.create(<App />).toJSON();
	expect(testSample).toMatchSnapshot();
});
