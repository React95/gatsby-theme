import React from 'react';

import { navify } from '../utils';

import Content from './content';
import ContentExplorer from './content-explorer';
import Seo from './seo';
import TaskBar from './taskbar';

const Desktop = ({ pageContext: { data, content = {} }, children }) => {
  const {
    allMdx: { edges },
  } = data;

  const nav = navify(edges.map((e) => e.node));

  return (
    <>
      <Seo content={content} />
      <ContentExplorer nav={nav} />
      <Content content={content}>{children}</Content>
      <TaskBar nav={nav} />
    </>
  );
};

export default Desktop;
