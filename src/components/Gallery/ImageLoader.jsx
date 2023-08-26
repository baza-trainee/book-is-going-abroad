// eslint-disable-next-line import/no-unresolved, import/no-extraneous-dependencies
import ContentLoader from 'react-content-loader';

const MyLoader = (props) => (
  <ContentLoader
    speed={2}
    width={252}
    height={361}
    viewBox="0 0 252 361"
    backgroundColor="#ede9e9"
    foregroundColor="#9e9a9a"
    {...props}
  >
    <rect x="166" y="361" rx="3" ry="3" width="252" height="11" />
    <rect x="0" y="0" rx="14" ry="14" width="252" height="361" />
  </ContentLoader>
);

export default MyLoader;
