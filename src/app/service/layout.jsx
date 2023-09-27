export async function generateMetadata() {
  // fetch SEO data
  return {
    title: "service",
  };
}

const Layout = ({ children }) => {
  return <div>{children}</div>;
};

export default Layout;
