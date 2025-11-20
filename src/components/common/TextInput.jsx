function TextInput({ ...props }) {
  return (
    <input
      {...props}
      style={{
        padding: '10px',
        borderRadius: '8px',
        border: '1px solid #ccc',
      }}
    />
  );
}

export default TextInput;
