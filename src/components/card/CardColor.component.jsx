import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ColorInput from '../util/ColorInput.component';
import { buttonColorProps } from '../../redux/features/buttonGenerator/buttonGeneratorSlice';


export default function CardSize() {
  const dispatch = useDispatch();
  const { colorProps } = useSelector(state => state.buttonGenerator);

  const onButtonTextColor = (color) => {
    const buttonTextColorField = color;
    dispatch(buttonColorProps({ ...colorProps, color: buttonTextColorField ? buttonTextColorField : '#000000' }));
  }

  const onButtonBackgroundColor = (color) => {
    const buttonBackgroundColorField = color;
    dispatch(buttonColorProps({ ...colorProps, backgroundColor: buttonBackgroundColorField ? buttonBackgroundColorField : '#eeeeee' }));
  }

  const onButtonBorderColor = (color) => {
    const buttonBorderColorField = color;
    dispatch(buttonColorProps({ ...colorProps, borderColor: buttonBorderColorField ? buttonBorderColorField : '#eeeeee' }));
  }

  return (
    <div className='card card-color'>
      <div className="card-header">
        <h2>Button Colors</h2>
      </div>
      <div className="card-body">
        <ColorInput onChangeHandler={onButtonTextColor} id={'buttonTextColor'} label={'Text Color'} value={colorProps.color} />
        <ColorInput onChangeHandler={onButtonBackgroundColor} id={'buttonBackgroundColor'} label={'Background Color'} value={colorProps.backgroundColor} />
        <ColorInput onChangeHandler={onButtonBorderColor} id={'buttonBackgroundColor'} label={'Border Color'} value={colorProps.borderColor} />
      </div>
    </div>
  )
}
