type BaseLayoutProps = {
	children?: React.ReactNode;
};

const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
	return <main className="grid min-h-screen grid-cols-3">{children}</main>;
};

export default BaseLayout;
