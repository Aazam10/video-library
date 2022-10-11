const checkIsinHistory = (id, history) => {
  return history.some((video) => video._id === id);
};

export { checkIsinHistory };
