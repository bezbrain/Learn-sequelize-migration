class CustomErrorAPI extends Error {
  constructor(message: string | undefined) {
    super(message);
  }
}

export default CustomErrorAPI;
