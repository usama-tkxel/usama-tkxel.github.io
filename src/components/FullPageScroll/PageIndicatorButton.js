function PageIndicatorButton() {
  const goToPage = () => {
    this.props.goToPage(this.props.pageIndex);
  };

  let indicatorStyle = {
    height: "8px",
    width: this.props.active ? "20px" : "8px",
    margin: "10px",
    borderRadius: "4px",
    backgroundColor: "white",
    transition: "width 500ms ease",
  };

  return <div style={indicatorStyle} onClick={goToPage}></div>;
}

export default PageIndicatorButton
