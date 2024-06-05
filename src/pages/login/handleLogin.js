export const handleCustomerLogin = (data, setLoginData) => {
  const { token: tokenData, firstName, lastName } = data;
  const { token } = tokenData;
  const accountType = tokenData.authScope.type;
  const name = `${firstName}${lastName}`;

  setLoginData((before) => {
    return {
      ...before,
      loggedIn: true,
      accountType,
      token,
      meta: {
        name,
      },
    };
  });

  return name;
};

export const handleSellerLogin = (data, setLoginData) => {
  const { token: tokenData, businessName: name } = data;
  const { token } = tokenData;
  const accountType = tokenData.authScope.type;

  setLoginData((before) => {
    return {
      ...before,
      loggedIn: true,
      accountType,
      token,
      meta: {
        name,
      },
    };
  });

  return name;
};
