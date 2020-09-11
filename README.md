# react-layout-route

Route with layout for react &amp; react-router

## Usage

```tsx
//layout.tsx
import { LayoutProps } from "@bazo/react-layout-route";

const Layout = ({ children, ...props }: { children: React.ReactNode } & LayoutProps) => {
	return <div>{children}</div>;
};

//routes.tsx
import WithLayout from "@bazo/react-layout-route";
import Layout from "../components/layout";

const MyLayout = (props: RouteProps) => <WithLayout {...props} layout={Layout} />;

const Routes = () => {
	return (
		<Switch>
			<MyLayout path="/" component={Home} />
		</Switch>
	);
};
```
