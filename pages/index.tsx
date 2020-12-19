import {Center} from '@chakra-ui/react';

import {Renderer} from '../components/renderer';

const content = {
  component: 'Box',
  children: [
    {
      component: 'Badge',
      children: 'Nested Content',
      'data-testid': 'nested-content',
    },
  ],
};

const Index = () => {
  return (
    <Center sx={{height: '100vh'}}>
      <Renderer {...content} />
    </Center>
  );
};

export default Index;
