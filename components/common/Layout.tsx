import React from 'react';
import Nav from './Nav';

type LayoutProps = {
	children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
	return (
		<>
			<Nav />
			<div>{children}</div>
		</>
	);
}

export default Layout;
