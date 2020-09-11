import React, { FC } from "react";
import { match, Route, RouteComponentProps, RouteProps } from "react-router";

export type LayoutProps<P = any> = Omit<RouteComponentProps<P> & RouteProps, "component" | "render"> & {
	computedMatch: match;
};

const renderLayout = (
	Component: any,
	Layout: any,
	props: Omit<RouteProps, "component"> & { path: string },
	rest: RouteComponentProps
) => {
	const mergedProps = { ...props, ...rest };
	return (
		<Layout {...mergedProps}>
			<Component {...mergedProps} />
		</Layout>
	);
};

interface Props extends RouteProps {
	layout: React.FC | React.Component;
}

const WithLayout: FC<Props> = ({ component, layout, ...props }: Props) => {
	return <Route {...props} render={renderLayout.bind(null, component, layout, props)} />;
};

export default WithLayout;
