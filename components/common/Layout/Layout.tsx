import React from 'react';

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
	return <div className="layout">{children}</div>;
};

export default Layout;
