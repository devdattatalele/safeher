import { createElement } from 'react';
import { createRoot } from 'react-dom/client';
import { AppRegistry } from 'react-native';
import 'expo-router/entry';
import { registerRootComponent } from 'expo';
import App from './_layout';

registerRootComponent(App);

// Configure CORS headers for development server
if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
  };
  
  // Apply CORS headers to all responses
  const originalFetch = window.fetch;
  window.fetch = function(url, options = {}) {
    options.headers = {
      ...options.headers,
      ...corsHeaders
    };
    return originalFetch(url, options);
  };
}

function WebApp() {
  return createElement(require('./').default);
}

if (typeof document !== 'undefined') {
  const rootTag = createRoot(document.getElementById('root') ?? document.getElementById('main'));
  const RootComponent = () => createElement(WebApp);

  AppRegistry.registerComponent('main', () => RootComponent);
  rootTag.render(createElement(RootComponent));
}