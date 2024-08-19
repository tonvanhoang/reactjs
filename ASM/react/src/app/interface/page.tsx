interface Product {
    _id: string;
    name: string;
    img: string;
    price: number;
    quantity: number;
    short_description:string;
    description:string;
    id_cate:string;
    size:string[]
  }
  interface Category{
    _id:string;
    name:string;
  }
  interface Account{
    _id:string;
    name:string;
    role:string;
    password:string;
    email:string;
    avata:string;
    phoneNumber:number
  }
  interface Comment{
    _id:string;
    comment:string;
    rep_comment:string;
    datecomment:string;
    id_account:string;
    id_product:string
  }