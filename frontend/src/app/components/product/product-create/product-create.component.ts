import { Product } from "./../product.model";
import { Component, OnInit } from "@angular/core";
import { ProductService } from "../product.service";
import { Router } from "@angular/router";

@Component({
	selector: "app-product-create",
	templateUrl: "./product-create.component.html",
	styleUrls: ["./product-create.component.css"],
})
export class ProductCreateComponent implements OnInit {
    product: Product = {
		name: "",
		price: null,
	};

	constructor(
		private productService: ProductService,
		private router: Router
	) {}

	ngOnInit(): void {}

	createProduct(): void {
        if(this.product.name==="" && this.product.price===null ){
            alert("Quer cadastrar nada?")
            return
        }
        if(this.product.price === null){
            alert("Epa, cadê o preço amigão!");
            return
        }
        if(this.product.name === ""){
            alert("Perala, e o nome?")
            return
        }
		else {
			this.productService.create(this.product).subscribe(() => {
				this.productService.showMessage("Produto criado!");
				this.router.navigate(["/products"]);
			});
		}

		this.productService.showMessage("Produto criado");
	}

	cancel(): void {
		this.router.navigate(["/products"]);
	}
}
