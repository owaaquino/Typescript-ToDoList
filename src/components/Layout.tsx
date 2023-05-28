type Props = {
  title: string;
  children: React.ReactNode;
};

const Layout = ({ title, children }: Props) => {
  return (
    <>
      <h1>{title}</h1>
      {children}
    </>
  );
};

export default Layout;
