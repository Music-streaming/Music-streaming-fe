function MoreButton({ onClick, size = 6, color = '#3D68BC' }) {
  const dotStyle = {
    width: size,
    height: size,
    borderRadius: '50%',
    backgroundColor: color,
  };

  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        border: 'none',
        background: 'transparent',
        display: 'flex',
        gap: size,
        padding: 0,
        cursor: 'pointer',
      }}
    >
      <span style={dotStyle}></span>
      <span style={dotStyle}></span>
      <span style={dotStyle}></span>
    </button>
  );
}

export default MoreButton;
