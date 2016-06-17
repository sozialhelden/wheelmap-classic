import React, { PropTypes } from 'react';
import Form from '../Form';

const { any } = PropTypes;

function NodesForm({ children }) {
  return (
    <Form className="node-form">
      {children}
    </Form>
  );
}

NodesForm.propTypes = {
  children: any
};

export default NodesForm;
