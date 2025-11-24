function TextInput({ className = '', style = {}, ...props }) {
  return <input {...props} className={className} style={style} />;
}

export default TextInput;
