(function (window) {
  var VimeoPlayerApiLoader = {
    src: 'https://player.vimeo.com/api/player.js',
    loading: false,
    loaded: false,
    loadedCheckInterval: null,
    listeners: [],

    load: function (callback) {
      var _this = this;
      this.listeners.push(callback);

      if (this.loaded) {
        setTimeout(function () {
          _this.done();
        }, 0);
        return;
      }

      if (this.loading) {
        return;
      }

      this.loading = true;

      this.loadedCheckInterval = setInterval(function () {
        if (typeof window.Vimeo !== 'undefined') {
          clearInterval(this.loadedCheckInterval);
          _this.loadedCheckInterval = null;
          _this.loaded = true;
          _this.done();
        }
      }, 100);

      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      script.src = this.src;
      document.head.appendChild(script);
    },

    done: function () {
      while (this.listeners.length > 0) {
        this.listeners.pop()(window.Vimeo);
      }
    }
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = VimeoPlayerApiLoader;
  } else {
    window.VimeoPlayerApiLoader = VimeoPlayerApiLoader;
  }
}(window));
