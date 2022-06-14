import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Input from '../../shared/components/UIElements/Input';
import Button from '../../shared/components/UIElements/Button';
import {VALIDATOR_REQUIRE,VALIDATOR_MINLENGTH} from '../../shared/components/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import Card from '../../shared/components/UIElements/Card';

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Empire State Building',
    description: 'One of the most famous sky scrapers in the world!',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
    address: '20 W 34th St, New York, NY 10001',
    top_recommended_things: 'hike',
    hints_tips: 'dont get lost',
    stay: 'airbnb',
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
    top_recommended_things: 'hike',
    hints_tips: 'dont get lost',
    stay: 'airbnb',
    location: {
      lat: 40.7484405,
      lng: -73.9878584
    },
    creator: 'u2'
  }
];

const UpdatePlace = () => {
  const [isLoading, setIsLoading] = useState(true);
  const placeId = useParams().placeId;
  const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId);

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: '',
        isValid: false
      },
      description: {
        value: '',
        isValid: false
      },
      location: {
        value: '',
        isValid: false
      },
      stay: {
        value:'',
        isValid: false
      },
      top_recommended_things: {
        value: '',
        isValid: false
      },
      hints_tips: {
        value: '',
        isValid: false
      }

    },
    false
  );

  useEffect(() => {
    if (identifiedPlace) {
      setFormData(
        {
          title: {
            value: identifiedPlace.title,
            isValid: true
          },
          description: {
            value: identifiedPlace.description,
            isValid: true
          },
          location: {
            value: identifiedPlace.location,
            isValid: true
          },
          stay: {
            value: identifiedPlace.stay,
            isValid: true
          },
          top_recommended_things: {
            value: identifiedPlace.top_recommended_things,
            isValid: true
          },
          hints_tips: {
            value: identifiedPlace.hints_tips,
            isValid: true
          }
    
        },
        true
      );
    }
    setIsLoading(false);
  }, [setFormData, identifiedPlace]);

  const placeUpdateSubmitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  if (!identifiedPlace) {
    return (
      <div className="center">
        <Card>
          <h2>Could not find place!</h2>
        </Card>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="center">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (min. 5 characters)."
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
      />
      <Input
        id="location"
        element="input"
        type="text"
        label="Location"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter the location."
        onInput={inputHandler}
        initialValue={formState.inputs.location.value}
        initialValid={formState.inputs.location.isValid}
      />
       <Input
        id="stay"
        element="input"
        type="text"
        label="Your Stay"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter where you stayed or would recommend to stay e.g. AirBnB or Hotel"
        onInput={inputHandler}
        initialValue={formState.inputs.stay.value}
        initialValid={formState.inputs.stay.isValid}
      />
      <Input
        id="top_recommended_things"
        element="input"
        type="textarea"
        label="Things to do and see"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter at least 5 recomendtions to do or to see"
        onInput={inputHandler}
        initialValue={formState.inputs.top_recommended_things.value}
        initialValid={formState.inputs.top_recommended_things.isValid}
      />
      <Input
        id="hints_tips"
        element="input"
        type="textarea"
        label="Hints and Tips"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter hints and tips"
        onInput={inputHandler}
        initialValue={formState.inputs.hints_tips.value}
        initialValid={formState.inputs.hints_tips.isValid}
      />
      <Button type="submit" disabled={!formState.isValid}>
        UPDATE PLACE
      </Button>
    </form>
  );
};

export default UpdatePlace;
