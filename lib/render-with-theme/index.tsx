import {ChakraProvider} from '@chakra-ui/react';
import {
  render as testingRender,
  RenderOptions,
  RenderResult,
} from '@testing-library/react';
import {ReactElement} from 'react';

export const renderWithTheme = (
  element: ReactElement,
  options?: RenderOptions,
): RenderResult => {
  return testingRender(element, {
    wrapper: ChakraProvider,
    ...options,
  });
};
