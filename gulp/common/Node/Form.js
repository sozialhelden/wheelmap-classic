const React = require('react');
const Form = require('../Form');

function NodesForm(props) {
  return (
    <Form className="node-form">
      {props.children}
    </Form>
  );
}

module.exports = NodesForm;