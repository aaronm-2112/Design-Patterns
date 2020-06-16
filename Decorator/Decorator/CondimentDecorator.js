"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Purpose: Subclass the Component to get the same type. Include new methods to add new behaviour at run time to the objects being decorated. 
//TODO: Make the getDescritpion and cost method abstract. Rationale: If i want different logi c it will be difficult to add. Which is the purpose of the decorator pattern. 
var CondimentDecorator = /** @class */ (function () {
    function CondimentDecorator(bev) {
        this.description = "unknown condiment";
        this.itemCost = 0;
        this.bev = bev;
    }
    CondimentDecorator.prototype.getDescription = function () {
        return this.bev.getDescription() + ', ' + this.description;
    };
    CondimentDecorator.prototype.cost = function () {
        return this.bev.cost() + this.itemCost;
    };
    return CondimentDecorator;
}());
exports.default = CondimentDecorator;
