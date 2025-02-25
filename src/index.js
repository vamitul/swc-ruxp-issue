/*
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

import '@spectrum-web-components/theme/theme-light.js';
import '@spectrum-web-components/theme/theme-lightest.js';
import '@spectrum-web-components/theme/theme-dark.js';
import '@spectrum-web-components/theme/theme-darkest.js';
import '@spectrum-web-components/theme/scale-medium.js';

import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
// import "./index.css";
import App from './App.js';


const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
      <App />
  </StrictMode>
);
