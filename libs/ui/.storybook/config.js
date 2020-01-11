import React from 'react';
import { configure, addDecorator } from '@storybook/react';

import Container from './Container';
addDecorator(story => <Container story={story} />);

function loadStories() {
  const req = require.context('../src/stories', true, /\.story\.tsx$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
