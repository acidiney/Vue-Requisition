var linkMixins = {
  methods: {
    transformLink: function (link) {
      return 'http://' + link;
    }
  }
}

module.exports = linkMixins
