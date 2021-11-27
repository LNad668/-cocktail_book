document.addEventListener('DOMContentLoaded', function () {
    const createShareHtml = function (title, shareData) {
      let anchorList = [];
      const anchorTemplate = function (item) {
        return '<a href="' + item.href + '" style="color:red" target="_blank" rel="noopener">' + item.title + '</a>';
      }
      const wrapperTemplate = function (title, anchorList) {
        return '<div class="social-share__title">' + title + '</div><div class="social-share__items">' + anchorList.join('') + '</div>';
      }
      shareData.forEach(function (item) {
        anchorList.push(anchorTemplate(item));
      })
      return wrapperTemplate(title, anchorList);
    }
    const $socialShare = document.querySelector('.social-share');
    if ($socialShare) {
      const url = encodeURIComponent(location.protocol + '//' + location.host + location.pathname);
      const title = encodeURIComponent(document.title);
      const twitterUserName = 'itchief_ru ';
      const shareData = [{
          title: 'Twitter',
          href: 'https://twitter.com/intent/tweet?text=' + title + '&url=' + url + '&via=' + twitterUserName ,
        },
        {
          title: 'Facebook',
          href: 'https://www.facebook.com/sharer/sharer.php?u=' + url,
        },
        {
          title: 'ВКонтакте',
          href: 'https://vk.com/share.php?url=' + url,
        },
        {
          title: 'Telegram',
          href: 'https://t.me/share/url?url=' + url + '&text=' + title,
        }
      ];
      const $html = createShareHtml('<h5>'+'Поделиться этим материалом в социальных сетях:'+'</h5>', shareData);
      $socialShare.innerHTML = $html;
    }
  });