/**
 * Read more about lazyLoad using IntersectionObserver
 * https://developers.google.com/web/fundamentals/performance/lazy-loading-guidance/images-and-video/
 * --
 * Polyfill: https://github.com/w3c/IntersectionObserver/tree/master/polyfill
 */
const plugin = {
  install: Vue => {
    const _swapImage = (targetEl) => {
      // data original
      const dataSrc = targetEl.dataset.src
      // data fallback image
      const dataErr = targetEl.dataset.err
      // async load image
      var newImage = new Image()
      newImage.src = dataSrc

      // when success
      newImage.onload = () => {
        if (dataSrc) {
          targetEl.src = dataSrc
        }
      }

      // when image failed to fetched
      newImage.onerror = () => {
        if (dataErr) {
          targetEl.src = dataErr
        }
      }
    }

    const _initObserver = (el) => {
      const lazyImageObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
          // when intersecting
          if (entry.isIntersecting) {
            const lazyImage = entry.target
            _swapImage(lazyImage)
            // remove observer after done
            lazyImageObserver.unobserve(lazyImage)
          }
        })
      })
      // init observer
      lazyImageObserver.observe(el)
    }

    Vue.directive('lazyimg', {
      bind (el) {
        // basic flow: read from data-src attribute than move to src attr
        if ('IntersectionObserver' in window) {
          _initObserver(el)
        } else {
          // fallback when IntersectionObserver not supported
          _swapImage(el.target)
        }
      },
      update (el) {
        // fired when you replace with value
      }
    })
  }
}

export default plugin
