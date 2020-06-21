// functional component because there wont be state here
import React from 'react';
import Person from './Person/Person';

const persons = (props) => props.persons.map((person, index) =>{
            return (
              <div> 
              <Person key={person.id}
                name={ person.name}
                age={person.age }
                changed={event => props.changed(event, person.id)}
                click={() => props.clicked(index)}/>
                </div>
              )
            }
          )
    
 
export default persons;
