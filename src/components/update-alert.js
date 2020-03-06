import React, { useState, useEffect } from 'react';
import { Alert, Container } from 'react-bootstrap';
import { Subject } from 'rxjs';
import styled from 'styled-components';

export const updateAlert$ = new Subject();

const UpdateAlert = () => {
  const [update, setUpdate] = useState([]);
  useEffect(() => {
    updateAlert$.subscribe(update => {
      handleAddAlert(update);
      setTimeout(() => {
        handleDeleteAlert();
      }, 3000);
    });
    () => updateAlert$.unsubscribe();
  }, []);

  const handleAddAlert = update => {
    setUpdate(oldState => [...oldState, update]);
  };

  const handleDeleteAlert = () => {
    setUpdate(oldState => oldState.slice(1, oldState.length));
  };

  return (
    <AlertContainer fluid>
      {update.map(alert => (
        <AlertMessage key={alert.title + Math.random} variant={'primary'}>
          <p>
            You've add <b>{alert.title}</b> to shelf <b>{alert.shelf}</b>
          </p>
        </AlertMessage>
      ))}
    </AlertContainer>
  );
};

export default UpdateAlert;

const AlertContainer = styled(Container)`
  position: fixed;
  bottom: 50px;
`;

const AlertMessage = styled(Alert)`
  width: 70%;
  margin: 0px 15% 0px 15%;
`;
