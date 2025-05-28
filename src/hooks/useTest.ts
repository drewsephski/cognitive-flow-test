import { useContext } from 'react';
import { TestContext } from '@/contexts/TestContext';
import type { TestContextType } from '@/types/test';

export const useTest = (): TestContextType => {
  const context = useContext(TestContext);
  if (context === undefined) {
    throw new Error('useTest must be used within a TestProvider');
  }
  return context;
};
