import React from 'react';
import Switch from '../Switch/Switch';
import './Header.css';

interface Props {
  value: boolean;
  title?: string;
  handleToggle: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Header = ({ value, handleToggle, title }: Props): JSX.Element => (
  <div data-testid="header" className="header-container">
    <div>
      <h1>{title}</h1>
    </div>
    <div>
      <Switch defaultChecked={value} handleToggle={handleToggle} />
    </div>
  </div>
);

export default Header;
