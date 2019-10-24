import React, { useState, useEffect } from 'react';
import thingsReducer from '../reducers/things';
import { List } from 'semantic-ui-react';

const NoteApp = props => {
  const [things, setThing] = useState([]);

  useEffect(() => {
    fetch(`v1/things.json`)
      .then(response => response.json())
      .then(json => {
        setThing(json.things);
      });
  }, []);

  const mapp = things.map((thing, index) => (
    <List.Item key={index}>
      <List.Icon
        name="arrow circle right"
        size="large"
        verticalAlign="middle"
      />
      <List.Content>
        <List.Header as="a">{thing.name}</List.Header>
        <List.Description as="a">{thing.guid}jhihihihihi</List.Description>
      </List.Content>
    </List.Item>
  ));

  return (
    <React.Fragment>
      Greeting: {props.greeting}
      {mapp}
    </React.Fragment>
  );
};

export default NoteApp;

// import React from 'react';
// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';

// import { List } from 'semantic-ui-react';

// import { getThings } from '../actions';

// class HelloWorld extends React.Component {
//   // componentDidMount() {
//   //   this.props.getThings();
//   // }

//   render() {
//     const { things } = this.props;
//     const thingsList = things.map((thing, index) => {
//       return (
//         <List.Item key={index}>
//           <List.Icon
//             name="arrow circle right"
//             size="large"
//             verticalAlign="middle"
//           />
//           <List.Content>
//             <List.Header as="a">{thing.name}</List.Header>
//             <List.Description as="a">{thing.guid}</List.Description>
//           </List.Content>
//         </List.Item>
//       );
//     });

//     return (
//       <React.Fragment>
//         Greeting: {this.props.greeting}
//         <button className="getThingsBtn" onClick={() => this.props.getThings()}>
//           getThings
//         </button>
//         <br />
//         <List divided relaxed>
//           {thingsList}
//         </List>
//       </React.Fragment>
//     );
//   }
// }

// const structuredSelector = createStructuredSelector({
//   things: state => state.things,
// });

// const mapDispatchToProps = { getThings };

// export default connect(
//   structuredSelector,
//   mapDispatchToProps
// )(HelloWorld);
