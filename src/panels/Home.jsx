
import './Home.css';

import { Button } from '@swc-react/button';
import { Menu, MenuItem, MenuDivider } from '@swc-react/menu';

export const Home = () => {

  return (
    <>
      <div>
        <h1>test</h1>
      <Button onClick={addRule}>Add Rule</Button>

    </div>
        <div>
        <h1>Welcome</h1>

        <Menu selects="single">
          <MenuItem selected>Sample Menu</MenuItem>
          <MenuDivider></MenuDivider>
          <MenuItem>Select Option 1</MenuItem>
          <MenuItem>Select Option 2</MenuItem>
          <MenuItem>Select Option 3</MenuItem>
          <MenuItem>Select Option 4</MenuItem>
          <MenuItem disabled>Disabled Option</MenuItem>
        </Menu>
      </div>
  </>
  );
};
const addRule = () => {
  console.log(document.theme);
};
