class Vehicle {
    performance: number;
    model: string;
    kilometres: number;
    fuel: string;
    production: number;
    image: string;
    constructor(performance :number, model:string, kilometres: number, fuel: string, production: number, image: string){
    this.performance=performance;
    this.model=model
    this.kilometres=kilometres;
    this.fuel=fuel;
    this.production=production;
    this.image=image
    nesto.push(this);
    }
    printInfo () {
        return `
        <div class="col-lg-3 col-sm-6 col-xs-12">
        <div class="card" style="width: 18rem;">
        <img src="${this.image}" class="card-img-top" alt="..." style="height: 12rem;">
        <div class="card-body">
          <h5 class="Card Title">${this.model}</h5>
          <p class="">Performance: ${this.performance}</p>
          <p class="">Kilometres: ${this.kilometres}</p>
          <p class="">Fuel type:${this.fuel}</p>
          <p class="">Production year: ${this.production}</p>
          <a href="#" class="button btn btn-primary">Calculate price</a>
          <p class="price"> ? </p>
        </div>
        </div>
      </div>`;
    }
    howMuchItCosts() {
        return (this.performance * this.kilometres)/100;
    }
}

let nesto: Array<Vehicle> = [];

new Vehicle(5, "Model1", 15000, "diesel", 2002, "https://cdn.pixabay.com/photo/2015/05/28/23/12/auto-788747__340.jpg");
new Vehicle(7, "Model2", 12000, "diesel", 2012, "https://cdn.pixabay.com/photo/2015/01/19/13/51/car-604019__340.jpg");
new Vehicle(9, "Model3", 6000, "diesel", 2016, "https://cdn.pixabay.com/photo/2017/03/05/15/29/aston-martin-2118857__340.jpg")

for (let val of nesto) {
    (document.getElementsByClassName("result")[0] as HTMLElement).innerHTML += val.printInfo();
  }
  let btns = document.getElementsByClassName("button");

  for(let i = 0; i < btns.length ; i++){
      btns[i].addEventListener("click", function(){
          (document.getElementsByClassName("price")[i] as HTMLElement).innerHTML = nesto[i].howMuchItCosts();
      })
  }
