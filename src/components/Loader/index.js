import React from 'react';
import ContentLoader from 'react-content-loader';

export default function Loader(props) {
  return (
    <ContentLoader
      speed={2}
      width="100%"
      height={472}
      viewBox="0 0 100% 450"
      backgroundColor="#333333"
      foregroundColor="#282828"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {' '}
      <rect x="0" y="0" rx="0" ry="0" width="100%" height="100" />
      <rect x="0" y="42" rx="0" ry="0" width="100%" height="106" />
      <rect x="30" y="180" rx="0" ry="0" width="25%" height="10" />
      <rect x="30" y="210" rx="0" ry="0" width="35%" height="10" />
      <rect x="30" y="240" rx="6" ry="6" width="80%" height="40" />
      <rect x="30" y="290" rx="6" ry="6" width="80%" height="40" />
      <rect x="30" y="340" rx="6" ry="6" width="80%" height="40" />
      <rect x="30" y="410" rx="6" ry="6" width="80%" height="32" />

    </ContentLoader>
  );
}
