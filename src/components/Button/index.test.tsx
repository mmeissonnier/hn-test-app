import React from 'react';
import { render } from '@testing-library/react';
import { Button } from '.';

describe('components/Button', () => {
  it('should render correctly', () => {
    const { container } = render(<Button>FOO</Button>);
    expect(container).toMatchSnapshot();
  });
});
