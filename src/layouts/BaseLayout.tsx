type BaseLayoutProps = {
  children?: React.ReactNode;
};

const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
  return <div className="grid grid-cols-3">{children}</div>;
};

export default BaseLayout;
