const sendRequest = async (
  url: string,
  method: string,
  data?: object,
  headers?: HeadersInit
): Promise<any> => {
  try {
    const response = await fetch(url, {
      method: method,
      body: data && JSON.stringify(data),
      headers: headers && headers,
    });
    const returnedData = {
      data: await response.json(),
      status: response.status,
    };
    return returnedData;
  } catch (error) {
    return error!;
  }
};

export default sendRequest;
