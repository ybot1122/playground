Testing throwOnError and Error Boundary:

Steps:

1. npm install, and do npm run dev
2. go to localhost:3000 and observe that when the error is caught, NextJS callstack screen is rendered
3. now try doing npm run prod, and notice the ErrorBoundary behaves correctly.