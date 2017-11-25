(function() {
    'use strict';
    var App = window.App || {};

    function Truck(truckID, db){
        this.truckId = truckID;
        this.db = db;
    }

    Truck.prototype.createOrder = function(order) {
      console.log('Adding order for ' + order.emailAddress);
      this.db.add(order.emailAddress, order);
    };

    Truck.prototype.deliverOrder = function(customerID) {
        console.log('Delivering order for ' + customerID);
        this.db.remove(customerID);
    };

    App.Truck = Truck;
    window.App = App;
})();