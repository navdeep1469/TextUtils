const Alert = (props) => {
  const convertToCapital = (str) => {
    let data = str;
    return data[0].toUpperCase() + str.slice(1);
  };

  return (
    props.alert && (
      <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{convertToCapital(props.alert.type)}</strong> :{props.alert.msg}
      </div>
    )
  );
};

export default Alert;
