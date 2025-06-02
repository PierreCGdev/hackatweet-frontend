function Input({ value, onChange, placeholder, type }) {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      style={{
        width: "50%",
        padding: "0.75em 1em",
        borderRadius: "5px",
        backgroundColor: "#0F1419",
        color: "white",
        fontSize: "1rem",
        boxSizing: "border-box",
        border: "1px solid #2f3336",
        // marginTop: "1em",
      }}
    />
  );
}

export default Input;
