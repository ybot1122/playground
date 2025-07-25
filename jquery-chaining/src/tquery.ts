type TQueryInstance = {
  addClass: (className: string) => TQueryInstance;
  delay: (ms: number) => TQueryInstance;
};

interface TQuery extends TQueryInstance {
  currPromise: Promise<void>;
}

const curr: Record<string, TQuery> = {};

const $ = (selector: string) => {
  const matches = document.querySelectorAll(selector);

  const addClass = (className: string) => {
    curr[selector].currPromise = curr[selector].currPromise.then(() => {
      console.log("addClass started");

      matches.forEach((match) => {
        match.classList.add(className);
      });
    });
    return curr[selector];
  };

  const delay = (ms: number) => {
    curr[selector].currPromise = curr[selector].currPromise.then(() => {
      console.log("delay started");
      return new Promise((resolve) => {
        setTimeout(resolve, ms);
      });
    });
    return curr[selector];
  };

  curr[selector] = {
    addClass,
    delay,
    currPromise: Promise.resolve(),
  };

  return curr[selector];
};
