function IconButton({ icon, onClick, size = 'medium' }) {
  const sizes = {
    small: { width: '80px', height: '36px' },
    medium: { width: '120px', height: '48px' },
    large: { width: '160px', height: '56px' },
  };

  const { width, height } = sizes[size];

  return (
    <button
      onClick={onClick}
      style={{
        width,
        height,
        borderRadius: '12px',
        backgroundColor: '#205BD0',
        border: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
      }}
    >
      {icon}
    </button>
  );
}

export default IconButton;
