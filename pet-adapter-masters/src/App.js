import React from "react";
import {render} from "react-dom";

import pf from 'petfinder-client';
import Pet from "./components/Pet";

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
})

class App extends React.Component {

  constructor(props) {
    super();

    this.state = {
      pets: []
    }
  }


  componentDidMount() {
    petfinder.pet.find({autput: "full", location: "Seattle, WA"})
    .then(data=>{
      let pets;
      if(data.petfinder.pets && data.petfinder.pets.pet){
        if(Array.isArray(data.petfinder.pets.pet)){
          pets = data.petfinder.pets.pet
        }
        else{
          pets = [data.petfinder.pets.pet];
        }      }
      else{
        []
      }

      this.setState({pets});

    })
  }



  render() {
    return ( <div >
      <h1 > Adopt me! </h1> 


  {/* // In this way we can see what we have on the state
  // <pre>
  //   <code>{JSON.stringify(this.state, null, 4)}</code>
  // </pre> */}

  <div>
    {this.state.pets.map( pet => {
      let breed;

      if(Array.isArray(pet.breeds.breed)){
        breed = pet.breeds.breed.join(', ');
      }else{
        breed = pet.breeds.breed;
      }

        return (
        <Pet key={pet.id}
          name={pet.name}
          animal={pet.animal}
          breed={breed}
          media={pet.media}
          location={`${pet.contact.city}, ${pet.contact.state}`}/>
          )

      }) 
    }
 </div>
      </div>
    );
  }

};
render(React.createElement(App), document.getElementById('root'));