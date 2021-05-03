"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductCreateComponent = void 0;
var core_1 = require("@angular/core");
var ProductCreateComponent = /** @class */ (function () {
    function ProductCreateComponent(productService, router) {
        this.productService = productService;
        this.router = router;
        this.product = {
            name: "",
            price: null
        };
    }
    ProductCreateComponent.prototype.ngOnInit = function () { };
    ProductCreateComponent.prototype.createProduct = function () {
        var _this = this;
        if (this.product.name === "" && this.product.price === null) {
            alert("Quer cadastrar nada?");
            return;
        }
        if (this.product.price === null) {
            alert("Epa, cadê o preço amigão!");
            return;
        }
        if (this.product.name === "") {
            alert("Perala, e o nome?");
            return;
        }
        else {
            this.productService.create(this.product).subscribe(function () {
                _this.productService.showMessage("Produto criado!");
                _this.router.navigate(["/products"]);
            });
        }
        this.productService.showMessage("Produto criado");
    };
    ProductCreateComponent.prototype.cancel = function () {
        this.router.navigate(["/products"]);
    };
    ProductCreateComponent = __decorate([
        core_1.Component({
            selector: "app-product-create",
            templateUrl: "./product-create.component.html",
            styleUrls: ["./product-create.component.css"]
        })
    ], ProductCreateComponent);
    return ProductCreateComponent;
}());
exports.ProductCreateComponent = ProductCreateComponent;
