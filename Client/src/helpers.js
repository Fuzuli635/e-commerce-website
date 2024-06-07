export const storeUser = (data) => {
  localStorage.setItem(
    "user",
    JSON.stringify({
      identifier: data.user.identifier,
      jwt: data.jwt,
    })
  );
};

export const userData = () => {
  const stringifiedUser = localStorage.getItem("user") || '""';
  return JSON.parse(stringifiedUser || {});
};
