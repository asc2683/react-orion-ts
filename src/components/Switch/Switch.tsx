/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { FiThumbsUp } from 'react-icons/fi';
import './Switch.css';

interface Props {
  defaultChecked: boolean;
  // eslint-disable-next-line no-unused-vars
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
