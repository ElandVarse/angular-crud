import { Product } from "./../product.model";
import { Router, ActivatedRoute } from "@angular/router";
import { ProductService } from "./../product.service";
import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-product-update",
	templateUrl: "./product-update.component.html",
	styleUrls: ["./product-update.component.css"],
})
export class ProductUpdateComponent implements OnInit {
	product!: Product;

	constructor(
		private productService: ProductService,
		private router: Router,
		private route: ActivatedRoute
	) {}

	ngOnInit(): void {
		const id = this.route.snapshot.paramMap.get("id");
		const numId = Number(id);

		this.productService.readById(numId).subscribe((product) => {
			this.product = product;
		});
	}

	updateProduct(): void {
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
			this.productService.update(this.product).subscribe(() => {
				this.productService.showMessage(
					"Produto atualizado com sucesso!"
				);
				this.router.navigate(["/products"]);
			});
		}
	}

	cancel(): void {
		this.router.navigate(["/products"]);
	}
}
