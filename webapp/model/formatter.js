sap.ui.define([], () => {
  "use strict";

  return {
    toUpperCase: function (sValue) {
      if (!sValue) {
        return sValue;
      }

      return sValue.toUpperCase();
    },
    checkStockText: function (unitsInStock, unitsInOrder) {
		if(Number.isNaN(unitsInStock) || Number.isNaN(unitsInOrder)) {
			return null
		}
		
		if(unitsInStock < unitsInOrder) {
			return "Update Stock"
		}

		return "Stock Up To Date"
	},
    checkStockState: function (unitsInStock, unitsInOrder) {
		if(Number.isNaN(unitsInStock) || Number.isNaN(unitsInOrder)) {
			return "None"
		}
		
		if(unitsInStock < unitsInOrder) {
			return "Error"
		}

		return "Success"
	},
  };
});
