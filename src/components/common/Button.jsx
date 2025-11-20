function Button({ children, ...props }) {
  return (
    <button
      {...props}
      style={{
        padding: '10px 16px',
        borderRadius: '8px',
        border: 'none',
        cursor: 'pointer',
        fontWeight: '600',
      }}
    >
      {children}
    </button>
  );
}

export default Button;
