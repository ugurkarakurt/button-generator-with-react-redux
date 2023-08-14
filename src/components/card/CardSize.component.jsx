import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RangeInput from '../util/RangeInput.component';
import { buttonSizeProps } from '../../redux/features/buttonGenerator/buttonGeneratorSlice';


export default function CardSize() {
  const dispatch = useDispatch();
  const { sizeProps } = useSelector(state => state.buttonGenerator);

  const onButtonHeight = (event) => {
    const buttonHeightField = event.target.value;
    dispatch(buttonSizeProps({ ...sizeProps, minHeight: buttonHeightField }));
  }

  const onButtonWidht = (event) => {
    const buttonWidthField = event.target.value;
    dispatch(buttonSizeProps({ ...sizeProps, minWidth: buttonWidthField }));
  }

  const onButtonPadding = (event) => {
    const buttonPaddingField = event.target.value;
    const previewButton = document.querySelector('#preview-button')
    const compStyles = getComputedStyle(previewButton);
    const width = Math.ceil(compStyles.getPropertyValue('width').slice(0, -2));
    const height = Math.ceil(compStyles.getPropertyValue('height').slice(0, -2));

    dispatch(buttonSizeProps({ ...sizeProps, padding: buttonPaddingField, minWidth: width, minHeight: height }));
  }

  return (
    <div className='card card-size'>
      <div className="card-header">
        <h2>Button Size & Box</h2>
      </div>
      <div className="card-body">
        <RangeInput onChangeHandler={onButtonHeight} id={'buttonHeight'} label={'Height'} max={170} value={sizeProps.minHeight} />
        <RangeInput onChangeHandler={onButtonWidht} id={'buttonWidth'} label={'Width'} max={250} value={sizeProps.minWidth} />
        <RangeInput onChangeHandler={onButtonPadding} id={'buttonPadding'} label={'Padding'} max={65} value={sizeProps.padding} />
      </div>
    </div>
  )
}
