import React from 'react';
import PropTypes from 'prop-types';
class Test extends React.Component {
  render() {
    return (
      <React.Fragment>
        {this.props.name.map((thing, index) => (
          <p>
            thing.name <span>thing.guid</span>
          </p>
        ))}
      </React.Fragment>
    );
  }
}

Test.propTypes = {
  name: PropTypes.string,
};
export default Test;
