import React from 'react';
import Layout from '@/components/layout/Layout';
import { ThemeProvider } from '@/components/theme/ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      <Layout />
    </ThemeProvider>
  );
}

export default App;