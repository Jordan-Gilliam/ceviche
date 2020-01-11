import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from '../lib/input';

storiesOf('Input', module).add(
  'with text',
  () => <Input placeholder="string" />,
  {
    info: { inline: true }
  }
);
