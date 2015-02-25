hackyNews.factory('LinksFactory', function LinksFactory() {
  var factory = {};
  factory.links = [
    { title: 'Test1', url: 'http://www.google.com', user: 'amy123' },
    { title: 'Test2', url: 'http://www.bing.com', user: 'clem321' }
  ];

  factory.addLink = function() {
    factory.links.push({ title: factory.linkTitle, url: factory.url, user: factory.userName });
    factory.linkTitle = null;
    factory.url = null;
    factory.userName = null;
  };
  return factory;
})
