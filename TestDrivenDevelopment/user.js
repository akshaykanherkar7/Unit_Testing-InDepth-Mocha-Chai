exports.getFullAddress = function (user) {
  if (user.street == null) {
    return "Invalid address";
  }
  return `${user.street}, ${user.city}, ${user.province}. ${user.postal}`;
};
