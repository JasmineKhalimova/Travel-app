import React, { useCallback, useReducer } from 'react';
import Input from '../../shared/components/UIElements/Input';
import {VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH} from '../../shared/components/util/validators';
import Button from '../../shared/components/UIElements/Button';


const formReducer = (state, action) => {
  switch (action.type) {
    case 'INPUT_CHANGE':
      let formIsValid = true;
      for (const inputId in state.inputs) {
        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: { value: action.value, isValid: action.isValid }
        },
        isValid: formIsValid
      };
    default:
      return state;
  }
};

const NewPlace = () => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: {
      title: {
        value: '',
        isValid: false
      },
      description: {
        value: '',
        isValid: false
      }
    },
    isValid: false
  });

  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({
      type: 'INPUT_CHANGE',
      value: value,
      isValid: isValid,
      inputId: id
    });
  }, []);

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
        id="top-recommended-things"
        element="input"
        type="textarea"
        label="Things to do and see"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter at least 5 recomendtions to do or to see"
        onInput={inputHandler}
      />
      <Input
        id="hints-tips"
        element="input"
        type="textarea"
        label="Hints and Tips"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter hints and tips"
        onInput={inputHandler}
      />
      <Input
        id="Instagram"
        element="input"
        type="text"
        label="Instagram"
        validators={[]}
        errorText="Please enter a valid social media link."
        onInput={inputHandler}
      />
      <Input
        id="Facebook"
        element="input"
        type="text"
        label="Facebook"
        validators={[]}
        errorText="Please enter a valid social media link."
        onInput={inputHandler}
      />
      <Input
        id="Twitter"
        element="input"
        type="text"
        label="Twitter"
        validators={[]}
        errorText="Please enter a valid social media link."
        onInput={inputHandler}
      />
      <Button type="submit" disabled={!formState.isValid}>
        ADD PLACE
      </Button>
    </form>
  );
};

export default NewPlace;
