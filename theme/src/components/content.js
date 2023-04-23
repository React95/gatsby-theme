import { MDXProvider } from '@mdx-js/react';
import * as R95Components from '@react95/core';
import * as R95Icons from '@react95/icons';
import { navigate } from 'gatsby';
import React, { useEffect, useRef } from 'react';

import { TASKBAR_HEIGHT } from '../utils/constants';
import IconRenderer from './icon-renderer';

const Content = ({ content, children }) => {
  const ref = useRef(null);

  useEffect(() => {
    // I'm not proud of this
    if (ref.current) {
      ref.current.parentElement.style.overflow = 'auto';
    }
  }, [ref.current]);

  if (!content) return null;

  const {
    frontmatter: { title, icon, modal },
  } = content;

  if (modal) {
    return (
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
        <div ref={ref}>
          <MDXProvider components={{ ...R95Components, ...R95Icons }}>
            {children}
          </MDXProvider>
        </div>
      </R95Components.Modal>
    );
  }

  return <MDXProvider components={R95Components}>{children}</MDXProvider>;
};

export default Content;
