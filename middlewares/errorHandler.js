function GlobalErrorHandling(error, req, res, next) {
  if (error.isCustom) {
    const {
      status = 500,
      message = "Internal Server Error",
      field = "unknown",
    } = error;
    res.status(status).send({ message, field, status });
  } else {
    errorLogger.error(error.stack);
    res.status(500).send({
      message: "Internal Server Error",
      field: "unknown",
      status: 500,
    });
  }
}
function AppError(message, status, field) {
  let x = new Error(message);
  x.status = status || 500;
  x.field = field || "unknown";
  x.isCustom = true;
  return x;
}

export default GlobalErrorHandling;
export { AppError, GlobalErrorHandling };
