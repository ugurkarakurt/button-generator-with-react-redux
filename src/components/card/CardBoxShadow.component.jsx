import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RangeInput from '../util/RangeInput.component';
import SwitchInput from '../util/SwitchInput.component';
import { buttonBoxShadowState, buttonBoxShadowProps } from '../../redux/features/buttonGenerator/buttonGeneratorSlice';

export default function CardBoxShadow() {
  const dispatch = useDispatch();
  const { boxShadowProps } = useSelector(state => state.buttonGenerator);

  const boxShadowGenerater = (boxShadowParams) => {
    const boxShadow = `${boxShadowParams.inset ? boxShadowParams.inset : ''} ${boxShadowParams.horizontalLenght}px ${boxShadowParams.verticalLength}px ${boxShadowParams.blurRadius}px ${boxShadowParams.spreadRadius}px rgba(${boxShadowParams.color.slice(4, -1)}, ${boxShadowParams.opacity})`
    return boxShadow;
  }

  const onButtonBoxShadowHorizontalLenght = (event) => {
    const buttonBoxHorizontalLenght = event.target.value;
    let boxShadowGenerate = boxShadowGenerater({ ...boxShadowProps, horizontalLenght: buttonBoxHorizontalLenght });
    dispatch(buttonBoxShadowState({ boxShadow: boxShadowGenerate }));
    dispatch(buttonBoxShadowProps({ ...boxShadowProps, horizontalLenght: buttonBoxHorizontalLenght }));
  }

  const onButtonBoxShadowVerticalLenght = (event) => {
    const buttonBoxVeritcalLenght = event.target.value;
    let boxShadowGenerate = boxShadowGenerater({ ...boxShadowProps, verticalLength: buttonBoxVeritcalLenght });
    dispatch(buttonBoxShadowState({ boxShadow: boxShadowGenerate }));
    dispatch(buttonBoxShadowProps({ ...boxShadowProps, verticalLength: buttonBoxVeritcalLenght }));
  }

  const onButtonBoxShadowBlurRadius = (event) => {
    const buttonBoxBlurRadius = event.target.value;
    let boxShadowGenerate = boxShadowGenerater({ ...boxShadowProps, blurRadius: buttonBoxBlurRadius });
    dispatch(buttonBoxShadowState({ boxShadow: boxShadowGenerate }));
    dispatch(buttonBoxShadowProps({ ...boxShadowProps, blurRadius: buttonBoxBlurRadius }));
  }

  const onButtonBoxShadowSpreadRadius = (event) => {
    const buttonBoxShadowSpreadRadius = event.target.value;
    let boxShadowGenerate = boxShadowGenerater({ ...boxShadowProps, spreadRadius: buttonBoxShadowSpreadRadius });
    dispatch(buttonBoxShadowState({ boxShadow: boxShadowGenerate }));
    dispatch(buttonBoxShadowProps({ ...boxShadowProps, spreadRadius: buttonBoxShadowSpreadRadius }));
  }

  const onButtonBoxShadowInset = (event) => {
    const buttonBoxInset = event.target.checked;
    const inset = buttonBoxInset ? 'inset' : '';
    let boxShadowGenerate = boxShadowGenerater({ ...boxShadowProps, inset: inset });
    dispatch(buttonBoxShadowState({ boxShadow: boxShadowGenerate }));
    dispatch(buttonBoxShadowProps({ ...boxShadowProps, inset: inset }));
  }

  return (
    <div className='card card-box-shadow'>
      <div className="card-header">
        <h2>Button Box Shadow</h2>
      </div>
      <div className="card-body">
        <RangeInput onChangeHandler={onButtonBoxShadowHorizontalLenght} id={'horizontalLenght'} label={'Box Horizontal Lenght'} max={20} value={boxShadowProps.horizontalLenght} />
        <RangeInput onChangeHandler={onButtonBoxShadowVerticalLenght} id={'verticalLenght'} label={'Box Vertical Lenght'} max={20} value={boxShadowProps.verticalLength} />
        <RangeInput onChangeHandler={onButtonBoxShadowBlurRadius} id={'blurRadius'} label={'Box Blur Radius'} max={20} value={boxShadowProps.blurRadius} />
        <RangeInput onChangeHandler={onButtonBoxShadowSpreadRadius} id={'spreadRadius'} label={'Box Blur Radius'} max={20} value={boxShadowProps.spreadRadius} />
        <SwitchInput onChangeHandler={onButtonBoxShadowInset} id={'inset'} formLabel={'Box inset'} label={boxShadowProps.inset ? 'inset' : 'outset'} />
      </div>
    </div>
  )
}
