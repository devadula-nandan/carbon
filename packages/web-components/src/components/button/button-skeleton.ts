/**
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { html } from 'lit';
import { prefix } from '../../globals/settings';
import CDSButton from './button';
import styles from './button.scss?lit';
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';

/**
 * Button skeleton.
 */
@customElement(`${prefix}-button-skeleton`)
class CDSButtonSkeleton extends CDSButton {
  /**
   * Handles `click` event on the `<a>.
   *
   * @param event The event.
   */
  private _handleClickLinkSkeleton(event: MouseEvent) {
    if (this.disabled) {
      event.preventDefault(); // Stop following the link
      event.stopPropagation(); // Stop firing `onClick`
    }
  }

  render() {
    const {
      autofocus,
      disabled,
      download,
      href,
      hreflang,
      ping,
      rel,
      size,
      target,
      type,
    } = this;
    const classes = classMap({
      [`${prefix}--btn`]: true,
      [`${prefix}--skeleton`]: true,
      [`${prefix}--btn--${size}`]: size,
    });
    return href
      ? html`
          <a
            id="button"
            role="button"
            class="${classes}"
            download="${ifDefined(download)}"
            href="${ifDefined(href)}"
            hreflang="${ifDefined(hreflang)}"
            ping="${ifDefined(ping)}"
            rel="${ifDefined(rel)}"
            target="${ifDefined(target)}"
            type="${ifDefined(type)}"
            @click="${this._handleClickLinkSkeleton}"></a>
        `
      : html`
          <button
            id="button"
            class="${classes}"
            ?autofocus="${autofocus}"
            ?disabled="${disabled}"
            type="${ifDefined(type)}"></button>
        `;
  }

  static styles = styles;
}

export default CDSButtonSkeleton;
