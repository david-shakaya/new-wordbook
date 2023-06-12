// ПРосто опции слайдера

var splide = new Splide(".splide", {
  perPage: 5,
  height: "300px",

  breakpoints: {
    1919: {
      perPage: 4,
    },

    1008: {
      perPage: 3,
    },

    767: {
      perPage: 2,
    },
    571: {
      perPage: 1,
    },
  },
});

splide.mount();
