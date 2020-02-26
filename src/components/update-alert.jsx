import React, { useState, useEffect } from 'react';
import { Alert } from 'react-bootstrap';
import { Subject } from 'rxjs';
import styled from 'styled-components';

export const updateAlert$ = new Subject();

const UpdateAlert = () => {
  const [update, setUpdate] = useState({});
  const [anim, setAnim] = useState({ opacity: 0 });
  useEffect(() => {
    updateAlert$.subscribe(update => {
      setUpdate(update);
      setAnim({ opacity: 1 });
      setTimeout(() => setAnim({ opacity: 0 }), 3000);
    });
    () => updateAlert$.unsubscribe();
  }, []);

  return (
    <AlertMessage variant={'primary'} style={anim}>
      <p>
        You've add <b>{update.title}</b> to shelf <b>{update.shelf}</b>
      </p>
    </AlertMessage>
  );
};

export default UpdateAlert;

const AlertMessage = styled(Alert)`
  transition: all 300ms;
  position: fixed;
  bottom: 50px;
  width: 70%;
  margin: 0px 15% 0px 15%;
`;
