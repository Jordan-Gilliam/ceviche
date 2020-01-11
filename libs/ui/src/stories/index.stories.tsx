import React from 'react';
import { storiesOf } from '@storybook/react';

// import { text, number } from '@storybook/addon-knobs';
import Todos from '../lib/todos/todos';

// export const primary = () => <Todos />;

storiesOf('Todos', module).add('with text', () => <Todos />, {
  info: { inline: true }
});
