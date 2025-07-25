interface JQueryChain {
  addClass: (className: string) => JQueryChain;
  delay: (ms: number) => JQueryChain;
  currPromise: Promise<void>;
}

interface JQueryChainMap {
  [selector: string]: JQueryChain;
}

const curr: JQueryChainMap = {};

export const $ = (selector: string): JQueryChain => {
  const matches = document.querySelectorAll(selector);

  const addClass = (className: string): JQueryChain => {
    curr[selector].currPromise = curr[selector].currPromise.then(() => {
      console.log("addClass started");

      matches.forEach((match) => {
        match.classList.add(className);
      });
    });
    return curr[selector];
  };

  const delay = (ms: number): JQueryChain => {
    curr[selector].currPromise = curr[selector].currPromise.then(() => {
      console.log("delay started");
      return new Promise<void>((resolve) => {
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

// Example usage function
export const runExample = (): void => {
  $(".foo").delay(1000).addClass("bar").delay(1000).addClass("baz");
};
