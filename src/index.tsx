import { createRoot } from 'react-dom/client';

import { App } from './App';
import React from 'react';

const domNode = document.getElementById('root') as Element | DocumentFragment;
const root = createRoot(domNode);

root.render(<App />);
