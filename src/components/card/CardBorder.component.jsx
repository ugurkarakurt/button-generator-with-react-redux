import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RangeInput from '../util/RangeInput.component';
import SelectInput from '../util/SelectInput.component';
import { buttonBorderProps, buttonSizeProps } from '../../redux/features/buttonGenerator/buttonGeneratorSlice';

export default function CardBorder() {
  const dispatch = useDispatch();
  const { borderProps, sizeProps } = useSelector(state => state.buttonGenerator);

  const onButtonBorderWidth = (event) => {
    const buttonBorderWidthField = event.target.value;
    const previewButton = document.querySelector('#preview-button')
    const compStyles = getComputedStyle(previewButton);
    const width = Math.ceil(compStyles.getPropertyValue('width').slice(0, -2));
    const height = Math.ceil(compStyles.getPropertyValue('height').slice(0, -2));
    dispatch(buttonBorderProps({ ...borderProps, borderWidth: buttonBorderWidthField }));
    dispatch(buttonSizeProps({ ...sizeProps, minWidth: width, minHeight: height }));
  }

  const onButtonBorderRadius = (event) => {
    const buttonBorderRadiusField = event.target.value;
    dispatch(buttonBorderProps({ ...borderProps, borderRadius: buttonBorderRadiusField }));
  }

  const onButtonBorderStyle = (event) => {
    const buttonBorderStyletField = event.target.value;
    dispatch(buttonBorderProps({ ...borderProps, borderStyle: buttonBorderStyletField }));
  }


  return (
    <div className='card card-border'>
      <div className="card-header">
        <h2>Button Border</h2>
      </div>
      <div className="card-body">
        <SelectInput onChangeHandler={onButtonBorderStyle} id={'borderStyle'} label={'Border Style'} value={borderProps.borderStyle} />
        <RangeInput onChangeHandler={onButtonBorderRadius} id={'borderRadius'} label={'Border Radius'} max={20} value={borderProps.borderRadius} />
        <RangeInput onChangeHandler={onButtonBorderWidth} id={'borderWidth'} label={'Border Width'} max={20} value={borderProps.borderWidth} />
      </div>
    </div>
  )
}
