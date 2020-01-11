import React from 'react';
import { storiesOf } from '@storybook/react';
import Todos from '../lib/todos';

storiesOf('Todos', module).add('with text', () => <Todos />, {
  info: { inline: true }
});
