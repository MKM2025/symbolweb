// Process polyfill for browser environment
if (typeof window !== 'undefined' && typeof (window as any).process === 'undefined') {
  (window as any).process = {
    env: {},
    browser: true,
    version: '',
    versions: {},
    platform: 'browser',
    nextTick: (fn: Function) => setTimeout(fn, 0),
  };
}

// Also set it globally
if (typeof global !== 'undefined' && typeof (global as any).process === 'undefined') {
  (global as any).process = (window as any).process;
}

