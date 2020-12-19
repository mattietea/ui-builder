export const uuid = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
    /[xy]/g,
    function (result) {
      const number = (Math.random() * 16) | 0;
      const value = result === 'x' ? number : (number & 0x3) | 0x8;
      return value.toString(16);
    },
  );
};
