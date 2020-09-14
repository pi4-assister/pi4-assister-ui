const animations = {
  methods: {
    scrollTo(element = document.body, type = 'smooth') {
      scroll({
        top: element,
        behavior: type,
      });
    },
  },
};

export { animations };
