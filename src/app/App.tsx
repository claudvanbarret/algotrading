import { QueryClient, QueryClientProvider } from 'react-query';
import ResetStyle from '../theme/Reset.style';

import Router from '../router';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ResetStyle />
      <Router />
    </QueryClientProvider>
  );
}

export default App;
