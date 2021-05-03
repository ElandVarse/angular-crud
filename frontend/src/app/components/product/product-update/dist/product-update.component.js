"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductUpdateComponent = void 0;
var core_1 = require("@angular/core");
var ProductUpdateComponent = /** @class */ (function () {
    function ProductUpdateComponent(productService, router, route) {
        this.productService = productService;
        this.router = router;
        this.route = route;
    }
    ProductUpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get("id");
        var numId = Number(id);
        this.productService.readById(numId).subscribe(function (product) {
            _this.product = product;
        });
    };
    ProductUpdateComponent.prototype.updateProduct = function () {
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
            this.productService.update(this.product).subscribe(function () {
                _this.productService.showMessage("Produto atualizado com sucesso!");
                _this.router.navigate(["/products"]);
            });
        }
    };
    ProductUpdateComponent.prototype.cancel = function () {
        this.router.navigate(["/products"]);
    };
    ProductUpdateComponent = __decorate([
        core_1.Component({
            selector: "app-product-update",
            templateUrl: "./product-update.component.html",
            styleUrls: ["./product-update.component.css"]
        })
    ], ProductUpdateComponent);
    return ProductUpdateComponent;
}());
exports.ProductUpdateComponent = ProductUpdateComponent;
