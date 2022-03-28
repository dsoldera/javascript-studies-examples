// Code Example
// https://codepen.io/rema/pen/QWNpVjV

(function () {
  //   const mediaQuery = window.matchMedia('(max-width: 768px)');
  const mediaQueryXS = window.matchMedia('(min-width: 576px)');
  // const mediaQuerySM = window.matchMedia('(min-width: 576px)');
  // const mediaQueryMD = window.matchMedia('(min-width: 768px)');
  // const mediaQueryLG = window.matchMedia('(min-width: 992px)');
  // const mediaQueryXL = window.matchMedia('(min-width: 1200px)');

  const htmlTag = document.getElementsByTagName('html')[0];
  const el = document.querySelector('#myId');

  mediaQueryXS.addEventListener('change', () => {
    handleDeviceChange(mediaQueryXS);
  });

  function handleDeviceChange(e) {
    if (e.matches) {
      console.log('deu match');
    }
  }
  //   handleDeviceChange(mediaQueryXS);

  // const eventHandler = {
  //   mediaQueries: {
  //     mediaQueryXS: window.matchMedia('(max-width: 575px)'),
  //     mediaQuerySM: window.matchMedia('(min-width: 576px)'),
  //     mediaQueryMD: window.matchMedia('(min-width: 768px)'),
  //     mediaQueryLG: window.matchMedia('(min-width: 992px)'),
  //     mediaQueryXL: window.matchMedia('(min-width: 1200px)'),
  //   },
  // };

  // Object.keys(eventHandler.mediaQueries).map((evt) => {
  //   htmlTag.addEventListener(
  //     'change',
  //     handleDeviceChange(eventHandler.mediaQueries[evt])
  //   );
  // });
})();
