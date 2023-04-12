import { MDXProvider } from '@mdx-js/react';
import * as R95Components from '@react95/core';
import { navigate } from 'gatsby';
import React from 'react';

import { TASKBAR_HEIGHT } from '../utils/constants';
import IconRenderer from './icon-renderer';

const ConditionalWrapper = ({ condition, wrapper, children }) =>
  condition ? wrapper(children) : children;

const Content = ({ content, children }) => {
  if (!content) return null;

  const {
    frontmatter: { title, icon, modal },
  } = content;

  return (
    <ConditionalWrapper
      condition={modal}
      wrapper={(wrappedChildren) => (
        <R95Components.Modal
          title={title}
          icon={<IconRenderer {...icon} />}
          style={{
            top: 0,
            height: `calc(100% - ${TASKBAR_HEIGHT}px)`,
            width: '100%',
          }}
          closeModal={() => navigate('/')}
        >
          {wrappedChildren}
        </R95Components.Modal>
      )}
    >
      <MDXProvider components={R95Components}>{children}</MDXProvider>
    </ConditionalWrapper>
  );
};

export default Content;
