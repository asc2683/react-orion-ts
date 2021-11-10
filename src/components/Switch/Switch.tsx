import React from 'react';
import { FiThumbsUp } from 'react-icons/fi';
import './Switch.css';

interface Props {
  defaultChecked: boolean;
  handleToggle: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Switch = ({ defaultChecked, handleToggle }: Props) => (
  <div data-testid="switch" className="switch-container">
    <FiThumbsUp />
    <label className="switch">
      <input
        type="checkbox"
        defaultChecked={defaultChecked}
        onChange={handleToggle}
      />
      <span className="slider round" />
    </label>
  </div>
);

export default Switch;
