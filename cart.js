const loadLocalStorage = () => {
  const products=localstorageProduct();
  for(const product in products){
        addProduct(product);
  }
}
const addItem = () =>{
  //  alert('name');
    const productname=document.getElementById('product-name');
    const product = productname.value;
      if(product===' '){
    return 0;
  }
  else {
    addProduct(product);
    productItem(product);
  }
    // addProduct(n);
    
  //  console.log(product);
    productname.value=' ';
}
const addProduct = names =>{
  //  console.log(names);
  
    const ul=document.getElementById('item');
    const li = document.createElement('li');
    li.innerText=names;
    ul.appendChild(li);
}
const localstorageProduct = () =>{
    const carts=localStorage.getItem('cart');
    let cartobj;
     if(carts){
        cartobj=JSON.parse(carts);
     }
     else{ 
       cartobj={};
     }
     return cartobj;
}
const productItem = name => {

  const cartsproduct=localstorageProduct();
  //  cartsproduct[name]=1;
   if(cartsproduct[name]){
     cartsproduct[name]+=1;
   }
   else{
     cartsproduct[name]=1;
   }
   const stringify = JSON.stringify(cartsproduct);
   localStorage.setItem('cart',stringify);
    // console.log(stringify);
}
const placeOrder = () => {
  document.getElementById('item').textContent=``;
  localStorage.removeItem('cart');
}
loadLocalStorage();