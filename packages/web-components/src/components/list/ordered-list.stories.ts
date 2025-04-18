/**
 * Copyright IBM Corp. 2019, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html } from 'lit';
import storyDocs from './ordered-list.mdx';
import './index';

const defaultArgs = {
  isExpressive: false,
  native: false,
};

const controls = {
  isExpressive: {
    control: 'boolean',
    description: 'Specify whether this ordered list expressive or not.',
  },
  native: {
    control: 'boolean',
    description:
      'Specify whether this ordered list should use native list styles instead of custom counter.',
  },
};

export const Default = {
  args: defaultArgs,
  argTypes: controls,
  render: ({ isExpressive, native }) =>
    html`<cds-ordered-list ?is-expressive="${isExpressive}" ?native="${native}">
      <cds-list-item>Ordered List level 1</cds-list-item>
      <cds-list-item>Ordered List level 1</cds-list-item>
      <cds-list-item>Ordered List level 1</cds-list-item>
      <cds-list-item>Ordered List level 1</cds-list-item>
      <cds-list-item>Ordered List level 1</cds-list-item>
      <cds-list-item>Ordered List level 1</cds-list-item>
      <cds-list-item>Ordered List level 1</cds-list-item>
      <cds-list-item>Ordered List level 1</cds-list-item>
      <cds-list-item>Ordered List level 1</cds-list-item>
      <cds-list-item>Ordered List level 1</cds-list-item>
      <cds-list-item>Ordered List level 1</cds-list-item>
      <cds-list-item>Ordered List level 1</cds-list-item>
      <cds-list-item>Ordered List level 1</cds-list-item>
    </cds-ordered-list>`,
};

export const NativeListStyles = {
  args: { ...defaultArgs, native: true },
  argTypes: controls,
  render: ({ isExpressive, native }) =>
    html`<cds-ordered-list ?is-expressive="${isExpressive}" ?native="${native}">
      <cds-list-item>Ordered List level 1</cds-list-item>
      <cds-list-item>Ordered List level 1</cds-list-item>
      <cds-list-item>Ordered List level 1</cds-list-item>
      <cds-list-item>
        Ordered List level 1
        <cds-ordered-list ?is-expressive="${isExpressive}" ?native="${native}">
          <cds-list-item>Ordered List level 2</cds-list-item>
          <cds-list-item>Ordered List level 2</cds-list-item>
          <cds-list-item>Ordered List level 2</cds-list-item>
          <cds-list-item>Ordered List level 2</cds-list-item>
        </cds-ordered-list>
      </cds-list-item>
      <cds-list-item>Ordered List level 1</cds-list-item>
      <cds-list-item>Ordered List level 1</cds-list-item>
      <cds-list-item>Ordered List level 1</cds-list-item>
      <cds-list-item>Ordered List level 1</cds-list-item>
      <cds-list-item>Ordered List level 1</cds-list-item>
      <cds-list-item>Ordered List level 1</cds-list-item>
      <cds-list-item>Ordered List level 1</cds-list-item>
      <cds-list-item>Ordered List level 1</cds-list-item>
    </cds-ordered-list>`,
};

export const Nested = {
  args: defaultArgs,
  argTypes: controls,
  render: ({ isExpressive, native }) =>
    html`<cds-ordered-list ?is-expressive="${isExpressive}" ?native="${native}">
      <cds-list-item>
        Ordered List level 1
        <cds-ordered-list ?is-expressive="${isExpressive}" ?native="${native}">
          <cds-list-item>Ordered List level 2</cds-list-item>
          <cds-list-item>
            Ordered List level 2
            <cds-ordered-list
              ?is-expressive="${isExpressive}"
              ?native="${native}">
              <cds-list-item>Ordered List level 3</cds-list-item>
              <cds-list-item>Ordered List level 3</cds-list-item>
            </cds-ordered-list>
          </cds-list-item>
        </cds-ordered-list>
      </cds-list-item>
      <cds-list-item>Ordered List level 1</cds-list-item>
      <cds-list-item>Ordered List level 1</cds-list-item>
    </cds-ordered-list>`,
};

const meta = {
  title: 'Components/Ordered list',
  parameters: {
    docs: {
      page: storyDocs,
    },
  },
};

export default meta;
