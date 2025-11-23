function Button({ children, className = '', style = {}, ...props }) {
  return (
    <button
      {...props}
      className={className}
      style={{
        padding: '16px 20px',
        borderRadius: '30px',
        border: 'none',
        cursor: 'pointer',
        fontWeight: '600',
        ...style,
      }}
    >
      {children}
    </button>
  );
}

export default Button;
