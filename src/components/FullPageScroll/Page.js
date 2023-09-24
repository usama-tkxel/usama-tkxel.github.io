export default function Page(props) {
  let { style, children, ...otherProps } = { ...props };
  let { height, width, ...cleanedStyle } = { ...style };

  let pageStyle = {
    height: "100vh",
    width: "100%",
    ...cleanedStyle,
  };

  return (
    <div style={pageStyle} {...otherProps}>
      {children}
    </div>
  );
}
