const beforeLoadtime = new Date().getTime();

export const PageloadTime = () => {
  const afterLoadtime = new Date().getTime();
  const loadTime = (afterLoadtime - beforeLoadtime) / 1000;
  return loadTime;
};
