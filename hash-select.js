htmx.defineExtension('hash-select', {
  onEvent: function(name, evt) {
    if (name === 'htmx:beforeSwap') {
      var path = new URL(evt.detail.requestConfig.path, window.location);
      if (path.hash) {
        evt.detail.selectOverride = path.hash;
      }
    }
  }
});
