function MoreButton({
  onClick,
  size = 28,
  dotSize = 4,
  bgColor = '#252525',
  dotColor = '#3D68BC',
}) {
  const dotStyle = {
    width: dotSize,
    height: dotSize,
    borderRadius: '50%',
    backgroundColor: dotColor,
    display: 'inline-block',
  };

  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        backgroundColor: bgColor,
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 0,
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: dotSize * 0.7,
        }}
      >
        <span style={dotStyle}></span>
        <span style={dotStyle}></span>
        <span style={dotStyle}></span>
      </div>
    </button>
  );
}

export default MoreButton;
