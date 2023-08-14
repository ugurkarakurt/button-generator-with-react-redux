import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RangeInput from '../util/RangeInput.component';
import TextInput from '../util/TextInput.component';
import SwitchInput from '../util/SwitchInput.component';
import { buttonText, buttonClassName, buttonTextProps, buttonSizeProps } from '../../redux/features/buttonGenerator/buttonGeneratorSlice';

export default function CardText() {
  const dispatch = useDispatch();
  const { textProps, sizeProps } = useSelector(state => state.buttonGenerator);

  const onButtonTextChange = (event) => {
    const buttonTextField = event.target.value;
    const previewButton = document.querySelector('#preview-button');
    const compStyles = getComputedStyle(previewButton);
    const width = Math.ceil(compStyles.getPropertyValue('width').slice(0, -2));
    const height = Math.ceil(compStyles.getPropertyValue('height').slice(0, -2));

    dispatch(buttonText(buttonTextField));
    dispatch(buttonSizeProps({ ...sizeProps, minWidth: width, minHeight: height }));
  };

  const onButtonClassChange = (event) => {
    const buttonClassField = event.target.value;
    dispatch(buttonClassName(buttonClassField))
  };

  const onButtonFontSize = (event) => {
    const buttonFontSizeField = event.target.value;
    const previewButton = document.querySelector('#preview-button')
    const compStyles = getComputedStyle(previewButton);
    const width = Math.ceil(compStyles.getPropertyValue('width').slice(0, -2));
    const height = Math.ceil(compStyles.getPropertyValue('height').slice(0, -2));

    dispatch(buttonTextProps({ ...textProps, fontSize: buttonFontSizeField }));
    dispatch(buttonSizeProps({ ...sizeProps, minWidth: width, minHeight: height }));
  }

  const onButtonTextDecoration = (event) => {
    const buttonFontDecorationtField = event.target.checked;
    buttonFontDecorationtField
      ? dispatch(buttonTextProps({ ...textProps, textDecoration: 'underline' }))
      : dispatch(buttonTextProps({ ...textProps, textDecoration: 'none' }))
  }

  const onButtonTextTransform = (event) => {
    const buttonFontDecorationtField = event.target.checked;
    buttonFontDecorationtField
      ? dispatch(buttonTextProps({ ...textProps, textTransform: 'uppercase' }))
      : dispatch(buttonTextProps({ ...textProps, textTransform: 'lowercase' }))
  }

  const onButtonFontWeight = (event) => {
    const buttonFontWeightField = event.target.checked;
    buttonFontWeightField
      ? dispatch(buttonTextProps({ ...textProps, fontWeight: 'bold' }))
      : dispatch(buttonTextProps({ ...textProps, fontWeight: 'lighter' }))
  }

  const onButtonFontStyle = (event) => {
    const buttonFontStyletField = event.target.checked;
    buttonFontStyletField
      ? dispatch(buttonTextProps({ ...textProps, fontStyle: 'italic' }))
      : dispatch(buttonTextProps({ ...textProps, fontStyle: 'normal' }))
  }


  return (
    <div className='card card-text'>
      <div className="card-header">
        <h2>Button Text & Font</h2>
      </div>
      <div className="card-body">
        <TextInput onChangeHandler={onButtonTextChange} id={'buttonText'} label={'Button Text'} />
        <TextInput onChangeHandler={onButtonClassChange} id={'buttonClass'} label={'class-name'} />
        <RangeInput onChangeHandler={onButtonFontSize} id={'fontSize'} label={'Font Size'} value={textProps.fontSize} />
        <div className="switch-wrapper">
          <SwitchInput onChangeHandler={onButtonTextDecoration} formLabel={'Text Decoration'} id={'textDecoration'} label={textProps.textDecoration} />
          <SwitchInput onChangeHandler={onButtonFontWeight} formLabel={'Font Weight'} id={'fontWeight'} label={textProps.fontWeight} />
          <SwitchInput onChangeHandler={onButtonTextTransform} formLabel={'Text Transform'} id={'textTransform'} label={textProps.textTransform} />
          <SwitchInput onChangeHandler={onButtonFontStyle} formLabel={'Font Style'} id={'fontStyle'} label={textProps.fontStyle} />
        </div>
      </div>
    </div>

  )
}
