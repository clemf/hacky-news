hackyNews.factory('LinksFactory', function LinksFactory() {
  var factory = {};
  factory.links = [
    { title: 'Test1', url: 'http://www.google.com', userName: 'amy123' },
    { title: 'Test2', url: 'http://www.bing.com', userName: 'clem321' }
  ];

  factory.addLink = function() {
    console.log(factory.links);
    factory.links.push({ title: factory.linkTitle, url: factory.url, user: factory.userName });
    factory.linkTitle = null;
    factory.url = null;
    factory.userName = null;
  };
  return factory;
})
