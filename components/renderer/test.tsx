import {screen, render} from '@testing-library/react';

import {Renderer} from '.';

describe('renderer', () => {
  it('handles no data', async () => {
    const value = 'No content found';

    render(<Renderer />);

    const result = await screen.findByText(value);

    expect(result).toBeInTheDocument();
  });

  it('handles children as a string', async () => {
    const value = {
      children: 'content',
    };

    render(<Renderer {...value} />);

    const result = await screen.findByText(value.children);

    expect(result).toBeInTheDocument();
  });

  it('handles children as an array', async () => {
    const value = {
      component: 'Box',
      children: [{children: 'nested-content'}, {children: 'nested-content'}],
    };

    render(<Renderer {...value} />);

    const result = await screen.findAllByText(value.children[0].children);

    expect(result).toHaveLength(2);
  });

  it('passes props to components', async () => {
    const value = {
      children: [
        {
          children: 'nested-content',
          'data-testid': 'nested-content',
        },
      ],
    };

    render(<Renderer {...value} />);

    const result = await screen.findByTestId(value.children[0]['data-testid']);

    expect(result).toBeInTheDocument();
  });
});
