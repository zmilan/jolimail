import { toElement } from '../util';

export type SpacerElement = {
  type: 'spacer';
  properties: {
    'container-background-color'?: string;
    'css-class'?: string;
    'height'?: string;
    'padding'?: string;
    'padding-top'?: string;
    'padding-right'?: string;
    'padding-bottom'?: string;
    'padding-left'?: string;
    'vertical-align'?: 'top' | 'middle' | 'bottom';
    'width'?: string;
  };
};

export const toMrml = (element: SpacerElement): string => toElement('mj-spacer', element.properties);
