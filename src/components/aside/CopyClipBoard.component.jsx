import { useState } from "react";
import { IconButton, Snackbar } from "@mui/material";
import { useSelector } from 'react-redux';

const CopyToClipboardButton = () => {
  const [open, setOpen] = useState(false);
  const { className, textProps, sizeProps, colorProps, borderProps, boxShadowState } = useSelector(state => state.buttonGenerator);

  const handleClick = () => {
    setOpen(true);
    navigator.clipboard.writeText(
      `.${className ? className : 'class-name'} {
        height: ${sizeProps.minHeight}px;
        width: ${sizeProps.minWidth}px;
        padding: ${sizeProps.padding}px;
        font-size: ${textProps.fontSize}px;
        text-decoration: ${textProps.textDecoration};
        text-transform: ${textProps.textTransform};
        font-weight: ${textProps.fontWeight};
        font-style: ${textProps.fontStyle};
        color: ${colorProps.color};
        background-color: ${colorProps.backgroundColor};
        border-color: ${colorProps.borderColor};
        border-style: ${borderProps.borderStyle};
        border-width: ${borderProps.borderWidth}px;
        border-radius: ${borderProps.borderRadius}px;
        box-shadow: ${boxShadowState.boxShadow};
    }`
    );
  };

  return (
    <div className="css-output">
      <IconButton onClick={handleClick} color="primary">
        &#10063;
      </IconButton>
      <Snackbar
        message="Copied to clibboard"
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={2000}
        onClose={() => setOpen(false)}
        open={open}
      />
      <div className="css-codes">
        <span>{`.${className ? className : 'class-name'}`} &#123;</span>
        <span>{`height: ${sizeProps.minHeight}px;`}</span>
        <span>{`width: ${sizeProps.minWidth}px;`}</span>
        <span>{`padding: ${sizeProps.padding}px;`}</span>
        <span>{`font-size: ${textProps.fontSize}px;`}</span>
        <span>{`text-decoration: ${textProps.textDecoration};`}</span>
        <span>{`text-transform: ${textProps.textTransform};`}</span>
        <span>{`font-weight: ${textProps.fontWeight};`}</span>
        <span>{`font-style: ${textProps.fontStyle};`}</span>
        <span>{`color: ${colorProps.color};`} </span>
        <span>{`background-color: ${colorProps.backgroundColor};`}</span>
        <span>{`border-color: ${colorProps.borderColor};`}</span>
        <span>{`border-style: ${borderProps.borderStyle};`}</span>
        <span>{`border-width: ${borderProps.borderWidth}px;`}</span>
        <span>{`border-radius: ${borderProps.borderRadius}px;`}</span>
        <span>{`box-shadow: ${boxShadowState.boxShadow}`}</span>
        <span>&#125;</span>
      </div>
    </div>
  );
};

export default CopyToClipboardButton;
