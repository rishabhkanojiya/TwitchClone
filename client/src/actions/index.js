import streams from "../api/streams";

export const signIn = userId => {
  return {
    type: "SIGN_IN",
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: "SIGN_OUT"
  };
};

export const createStream = formValues => async dispatch => {
  const response = await streams.post("/stream", formValues);

  dispatch({ type: "CREATE_STREAM", payload: response.data });
};
