import React from 'react';
import { useParams } from 'react-router-dom';
import Input from '../../shared/components/UIElements/Input';
import Button from '../../shared/components/UIElements/Button';
import {VALIDATOR_REQUIRE,VALIDATOR_MINLENGTH} from '../../shared/components/util/validators';

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Empire State Building',
    description: 'One of the most famous sky scrapers in the world!',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
    address: '20 W 34th St, New York, NY 10001',
    location: {
      lat: 40.7484405,
      lng: -73.9878584
    },
    creator: 'u1'
  },
  {
    id: 'p2',
    title: 'Empire State Building',
    description: 'One of the most famous sky scrapers in the world!',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
    address: '20 W 34th St, New York, NY 10001',
    location: {
      lat: 40.7484405,
      lng: -73.9878584
    },
    creator: 'u2'
  }
];

const UpdatePlace = () => {
  const placeId = useParams().placeId;

  const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId);

  if (!identifiedPlace) {
    return (
      <div className="center">
        <h2>Could not find place!</h2>
      </div>
    );
  }

  return (
    <form className='place-form'>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={() => {}}
        value={identifiedPlace.title}
        valid={true}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (min. 5 characters)."
        onInput={() => {}}
        value={identifiedPlace.description}
        valid={true}
      />
      <Input
        id="location"
        element="input"
        type="text"
        label="Location"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter the location."
        onInput={() => {}}
        value={identifiedPlace.location}
        valid={true}
      />
      <Input
        id="stay"
        element="input"
        type="text"
        label="Your Stay"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter where you stayed or would recommend to stay e.g. AirBnB or Hotel"
        onInput={() => {}}
        value={identifiedPlace.stay}
        valid={true}
      />
       <Input
        id="top-recommended-things"
        element="input"
        type="textarea"
        label="Things to do and see"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter at least 5 recomendtions to do or to see"
        onInput={() => {}}
        value={identifiedPlace.stay}
        valid={true}
      />
      <Input
        id="hints-tips"
        element="input"
        type="textarea"
        label="Hints and Tips"
        validators={[VALIDATOR_REQUIRE(5)]}
        errorText="Please enter hints and tips"
        onInput={() => {}}
        value={identifiedPlace.stay}
        valid={true}
      />
      <Input
        id="Instagram"
        element="input"
        type="text"
        label="Instagram"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid social media link."
        onInput={() => {}}
        value={identifiedPlace.stay}
        valid={true}
      />
      <Input
        id="Facebook"
        element="input"
        type="text"
        label="Facebook"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid social media link."
        onInput={() => {}}
        value={identifiedPlace.stay}
        valid={true}
      />
      <Input
        id="Twitter"
        element="input"
        type="text"
        label="Twitter"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid social media link."
        onInput={() => {}}
        value={identifiedPlace.stay}
        valid={true}
      />

      <Button type="submit" disabled={true}>
        UPDATE PLACE
      </Button>
    </form>
  );
};

export default UpdatePlace;
