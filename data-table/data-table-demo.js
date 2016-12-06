"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var DataTablePipe = (function () {
    function DataTablePipe() {
    }
    DataTablePipe.prototype.transform = function (array, query) {
        if (query) {
            return array.filter(function (value, index, arr) { return value.name.indexOf(query) > -1; });
        }
        return array;
    };
    DataTablePipe = __decorate([
        core_1.Pipe({ name: 'dataPipe' }), 
        __metadata('design:paramtypes', [])
    ], DataTablePipe);
    return DataTablePipe;
}());
exports.DataTablePipe = DataTablePipe;
var DataTableDemo = (function () {
    function DataTableDemo(http) {
        var _this = this;
        this.http = http;
        this.data = null;
        this.search = null;
        this.http.get('./data-table/data.json')
            .subscribe(function (data) {
            _this.data = data.json();
        });
    }
    DataTableDemo = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'data-table-demo',
            templateUrl: 'data-table-demo.html'
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], DataTableDemo);
    return DataTableDemo;
}());
exports.DataTableDemo = DataTableDemo;

//# sourceMappingURL=data-table-demo.js.map
