import React, { Component } from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown
} from "reactstrap";
class Telephones extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownOpen: false
    };
  }

  toggle = () => {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  };

  onMouseEnter = () => {
    this.setState({ dropdownOpen: true });
  };

  onMouseLeave = () => {
    this.setState({ dropdownOpen: false });
  };

  render() {
    return (
      <div>
        <div style={{ width: "120px" }}>
          <Dropdown
            onMouseOver={this.onMouseEnter}
            onMouseLeave={this.onMouseLeave}
            isOpen={this.state.dropdownOpen}
            toggle={this.toggle}
          >
            <DropdownToggle caret style={{ backgroundColor: "#17a2b8" }}>
              Telephones
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Samsung</DropdownItem>
              <DropdownItem>Apple</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    );
  }
}
export default Telephones;
