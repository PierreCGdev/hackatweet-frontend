function Button({
  text,
  handleClick,
  color,
  bgColor,
  fontWeight,
  border,
  paddingHorizontal,
}) {
  return (
    <button
      style={{
        backgroundColor: bgColor, // camelCase
        color: color,
        padding: `10px ${paddingHorizontal}px`,
        border: border,
        borderRadius: "20px",
        fontSize: "16px",
        fontWeight: fontWeight,
        cursor: "pointer",
      }}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}

export default Button;
