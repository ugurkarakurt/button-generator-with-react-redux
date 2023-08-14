import React from 'react';
import { useSelector } from 'react-redux';

export default function Button() {
  const { text, className, textProps, sizeProps, colorProps, borderProps, boxShadowState } = useSelector(state => state.buttonGenerator);
  const styles = {
    ...textProps, ...sizeProps, ...colorProps, ...borderProps, ...boxShadowState
  }

  return (
    <div className="previewer">
      <button className={className} style={styles} id="preview-button">{text ? text : 'My Button'}</button>
    </div>
  )
}
