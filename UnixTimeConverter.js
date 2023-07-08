// UnixTimeConverter.js

class UnixTimeConverter {
  static convert(unixTimestamp) {
    const milliseconds = unixTimestamp * 1000;
    const dateObject = new Date(milliseconds);
    const normalTime = dateObject.toLocaleString(); // Adjust locale as needed

    return normalTime;
  }
}

export default UnixTimeConverter;
