const doIf = (condition, onSuccess, onFailure = null) => {
  if (typeof condition === "function" && condition()) {
    return onSuccess;
  }
  if (!condition && typeof onFailure === "function") {
    return onFailure();
  } else if (!condition && typeof onSuccess == "string" && onFailure == null) {
    return "";
  } else if (!condition) {
    return onFailure;
  }
  return typeof onSuccess === "function" ? onSuccess() : onSuccess;
};

const helpers = (() => {
  const doIf = doIf;
  return { doIf };
})();

export { helpers as default, doIf };
