type BaseLayoutProps = {
  children?: JSX.Element;
};

const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
  return (
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">{children}</div>
  );
};

export default BaseLayout;
