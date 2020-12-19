import {createElement, FC} from 'react';
import {Box, Badge} from '@chakra-ui/react';

import {uuid} from '../../lib/uuid';

export interface Element {
  component?: keyof typeof elements | string;
  children?: string | Element[];
  [prop: string]: any;
}

type Props = Element;

const elements: Record<string, FC> = {
  Box,
  Badge,
};

export const Renderer = ({
  component = 'Box',
  children,
  ...props
}: Props): JSX.Element => {
  if (!children) {
    return <Box>No content found</Box>;
  }

  const type = elements?.[component] ?? component;

  if (typeof children !== 'object') {
    return createElement(type, props, children);
  }

  return createElement(
    type,
    props,
    children.map((value) => createElement(Renderer, {...value, key: uuid()})),
  );
};
