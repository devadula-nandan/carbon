/**
 * Copyright IBM Corp. 2019, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html } from 'lit';
import { prefix } from '../../globals/settings';

/**
 * @param Object options The options.
 * @param [Object.assistiveText] The assistive text for the spinner icon.
 * @param [Object.type] The spinner type.
 * @returns The spinner icon.
 */
export default ({
  description,
  small,
}: {
  description?: string;
  small?: boolean;
}) => {
  const radius = small ? '42' : '44';
  return html`
    <svg class="${prefix}--loading__svg" viewBox="0 0 100 100">
      ${!description ? undefined : html` <title>${description}</title> `}
      <circle
        ?hidden="${!small}"
        class="${prefix}--loading__background"
        cx="50%"
        cy="50%"
        r="${radius}" />
      <circle
        class="${prefix}--loading__stroke"
        cx="50%"
        cy="50%"
        r="${radius}" />
    </svg>
  `;
};
