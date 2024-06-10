export const convertEncodedCommas = (url: string) => {
  return url.replace(/%2C/g, ",");
};
