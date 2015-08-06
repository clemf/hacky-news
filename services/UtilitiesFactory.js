hackyNews.factory('UtilitiesFactory', function() {
  return {
    findById: function(collection, id) {
      for(var i = 0; i < collection.length; i++) {
        if(collection[i].id ==id)
          return collection[i];
      }
      return null;
    },

    hoursAgo: function(array, id) {
      var object = this.findById(array, id);
      var minutesSince = Math.round((Date.now() - object.date) / 60000);
      if (minutesSince < 1) {
        return "just now";
      }
      else if (minutesSince < 60) {
        return minutesSince + " minutes ago";
      }
      else if (minutesSince < 1440){
        return Math.round(minutesSince / 60) + " hours ago";
      }
      else {
        return Math.round(minutesSince / 1440) + " days ago";
      }
    }

  };
});
