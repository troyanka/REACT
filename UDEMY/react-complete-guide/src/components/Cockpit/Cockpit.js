import React, { useEffect } from 'react';
import classes from './Cockpit.css';

const Cockpit = (props) => {
  //in case we pass [], it will be executed when created and when it is unmounted
  useEffect(() => {
    console.log('[Cocpit.js] useEffect');
    //Http request...
    //const timer =
    setTimeout(() => {
      alert('Saved data to the cloud');
    }, 1000);

    return () => {
      //clearTimeout(timer);
      console.log('[Cocpit.js] clenup work in useEffect');
    };
  }, []);

  // it will be invoked in each cicle
  useEffect(() => {
    console.log('[Cocpit.js] 2nd useEffect');
    return () => {
      console.log('[Cocpit.js] clenup work in 2nd useEffect');
    };
  });

  let assignedClasses = [];
  let btnClass = '';

  if (props.showPersons) {
    btnClass = classes.red;
  }

  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red); // classes = ['red']
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold); // classes = ['red', 'bold']
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}> This is really working </p>
      <button className={btnClass} onClick={props.toggled}>
        Toggle Persons
      </button>
    </div>
  );
};

export default React.memo(Cockpit);
