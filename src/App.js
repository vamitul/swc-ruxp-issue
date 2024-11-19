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

// import './App.css';

import { useRef, useState, useEffect } from 'react';

import { Theme } from '@swc-react/theme';
import { Home } from './panels/Home.jsx';
import { Panel as RPanel, Plugin as RPlugin } from 'ruxp';

function App() {
  const docRef = useRef(document);
  const [theme, setTheme] = useState(docRef.current.theme.getCurrent());
  const handleThemeChange = (evt) => {
    console.log(evt);
    setTheme(evt);
  };
  useEffect(() => {
    docRef.current.theme.onUpdated.addListener(handleThemeChange);
    return () => {
      docRef.current.theme.onUpdated.removeListener(handleThemeChange);
    };
  }, []);

  return (
    <RPlugin>
      <RPanel id="smarty.conditional.styling.vam.panel">
        <Theme theme="spectrum" scale="medium" color={theme}>
          <Home></Home>
        </Theme>
      </RPanel>
    </RPlugin>
  );
}

export default App;
