import React from "react";
// import PropTypes from "prop-types";
function Alert({
  alert,
}) {
  const capaitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
  return (
    alert && (
      <div
        className={`alert alert-${alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{capaitalize(alert.type)}</strong>:{alert.msg}
      </div>
    )
  );
}

export default Alert;
