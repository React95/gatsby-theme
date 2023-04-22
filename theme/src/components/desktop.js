import React from 'react';

import { navify } from '../utils';

import Content from './content';
import ContentExplorer from './content-explorer';
import Seo from './seo';
import TaskBar from './taskbar';

const Desktop = ({
  pageContext: { data, content = {}, basePath },
  children,
}) => {
  const {
    allMdx: { edges },
  } = data;

  const nav = navify(
    edges.map((e) => e.node),
    { basePath },
  );

  return (
    <>
      <Seo content={content} />
      <ContentExplorer nav={nav} />
      {Object.keys(content).length > 0 && (
        <Content content={content}>{children}</Content>
      )}
      <TaskBar nav={nav} />
    </>
  );
};

export default Desktop;
