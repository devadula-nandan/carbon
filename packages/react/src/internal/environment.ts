/**
 * Copyright IBM Corp. 2016, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Indicate whether current execution environment can access the DOM.
 *
 * @see https://github.com/facebook/fbjs/blob/4d1751311d3f67af2dcce2e40df8512a23c7b9c6/packages/fbjs/src/core/ExecutionEnvironment.js#L12
 */
export const canUseDOM = !!(
  typeof window !== 'undefined' &&
  // TODO: `ssr-friendly` doesn't support ESLint v9.
  // https://github.com/kopiro/eslint-plugin-ssr-friendly/issues/30
  // https://github.com/carbon-design-system/carbon/issues/18991
  /*
  // eslint-disable-next-line ssr-friendly/no-dom-globals-in-module-scope
  */
  window.document &&
  /*
  // eslint-disable-next-line ssr-friendly/no-dom-globals-in-module-scope
  */
  window.document.createElement
);
