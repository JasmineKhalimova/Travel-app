import React from 'react';
import Input from '../../shared/components/UIElements/Input';
import {VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH} from '../../shared/components/util/validators';
import Button from '../../shared/components/UIElements/Button';
import { useForm } from '../../shared/hooks/form-hook';

const NewPlace = () => {
  const [formState, inputHandler] = useForm ({
    inputs: {
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
        value: '',
        isValid: false
      },
      top_recommended_things: {
        value: '',
        isValid: false
      },
      hints_tips: {
        value: '',
        isValid: false
      },
      creator: {
        value: '',
        isValid: false
      }
    },
    isValid: false
  });

  // Form submition handler
  const placeSubmithandler = event => {
    event.preventDefault();
    console.log(formState.inputs); // temp
  }

  return (
    <form className="place-form" onSubmit={placeSubmithandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title (e.g visited place)"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={inputHandler}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (at least 5 characters)."
        onInput={inputHandler}
      />
      <Input
        id="location"
        element="input"
        type="text"
        label="Location"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter the location."
        onInput={inputHandler}
      />
       <Input
        id="stay"
        element="input"
        type="text"
        label="Your Stay"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter where you stayed or would recommend to stay e.g. AirBnB or Hotel"
        onInput={inputHandler}
      />
      <Input
        id="top_recommended_things"
        element="input"
        type="textarea"
        label="Things to do and see"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter at least 5 recomendtions to do or to see"
        onInput={inputHandler}
      />
      <Input
        id="hints_tips"
        element="input"
        type="textarea"
        label="Hints and Tips"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter hints and tips"
        onInput={inputHandler}
      />
      <Button type="submit" disabled={!formState.isValid}>
        ADD PLACE
      </Button>
    </form>
  );
};

export default NewPlace;
