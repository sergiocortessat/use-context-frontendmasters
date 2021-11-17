import * as React from 'react';

import { ColorSwatch } from './ColorSwatch';
import { ColorInputs } from './ColorInputs';
import { ColorSliders } from './ColorSliders';

import { ThemeContext } from './ThemeContext';

import {ColorAdjustment} from './ColorAdjustment';
import { ColorSlider } from './ColorSlider';
import { ColorInput } from './ColorInput';

const Application = () => {
  const themes = React.useContext(ThemeContext);

  return (
    <main
      style={{
        ...themes.dark
      }}
    >
      <ColorSwatch />
      {/* <ColorInputs {...rgb} /> */}
      <ColorAdjustment Adjustment={ColorInput} />
      <ColorAdjustment Adjustment={ColorSlider} />

    </main>
  );
};

export default Application;