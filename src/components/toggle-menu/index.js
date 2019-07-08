import React from 'react';
import { ToggleMenuButton } from './style';

class ToggleMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  toggleMenu = () => {
    const { open } = this.state;
    this.setState({
      open: !open,
    });
  };

  render() {
    const { open } = this.state;
    return (
      <React.Fragment>
        <ToggleMenuButton onClick={this.toggleMenu} open={open}>
          <span />
          <span />
          <span />          
        </ToggleMenuButton>
      </React.Fragment>
    );
  }
}

export default ToggleMenu;
