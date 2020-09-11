import React from "react";
import WithLayout, { LayoutProps } from "../";
import { render } from "enzyme";
import { MemoryRouter, RouteProps } from "react-router";

const Layout = ({ children, ...props }: { children: React.ReactNode } & LayoutProps<any>) => {
	return (
		<div>
			<h1>My Layout</h1>
			{children}
		</div>
	);
};

const Child = (props: LayoutProps<{ id: number }>) => {
	return <div>child {props.match.params.id}</div>;
};

describe("with layout", () => {
	test("renders layout with children", () => {
		const MyLayout = (props: RouteProps) => <WithLayout {...props} layout={Layout} />;

		const wrapper = render(
			<MemoryRouter initialEntries={["/test/1"]}>
				<MyLayout path="/test/:id" component={Child} />
			</MemoryRouter>
		);

		expect(wrapper).toMatchSnapshot();
	});
});
