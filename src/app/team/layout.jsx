export async function generateMetadata() {
  // fetch SEO data
  return {
    title: "team",
  };
}

const Layout = ({ children }) => {
  return <div>{children}</div>;
};

export default Layout;
