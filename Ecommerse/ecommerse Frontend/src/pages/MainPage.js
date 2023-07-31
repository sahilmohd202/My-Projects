import "./MainPage.css";
import List from '../components/List.js';
import Ads from '../components/Ads.js';

function MainPage(){

const products=[
    {name:"Mi X Series 108 cm (43 inch) Ultra HD (4K) LED Smart Android TV with Dolby Vision and 30W Dolby Audio (2022 Model)",image:"https://rukminim1.flixcart.com/image/416/416/xif0q/television/5/c/k/-original-imaggsnkne4n5mvh.jpeg?q=70"},
    {name:"Seagate SkyHawk 4 TB Surveillance Systems Internal Hard Disk Drive (HDD) (ST4000VX007)  (Interface: SATA, Form Factor: 3.5 inch)",image:"https://rukminim1.flixcart.com/image/416/416/l3dcl8w0/internal-hard-drive/p/p/y/st4000vx007-seagate-original-imageg5awvd5zpve.jpeg?q=70"},
    {name:"POCO C50 (Royal Blue, 32 GB)  (2 GB RAM)",image:"https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/t/a/x/-original-imaghmtch6qfmfxg.jpeg?q=70"},
    {name:"Mi X Series 108 cm (43 inch) Ultra HD (4K) LED Smart Android TV with Dolby Vision and 30W Dolby Audio (2022 Model)",image:"https://rukminim1.flixcart.com/image/416/416/xif0q/television/5/c/k/-original-imaggsnkne4n5mvh.jpeg?q=70"},
    {name:"Seagasdfasdfate SkyHawk 4 TB Surveillance Systems Internal Hard Disk Drive (HDD) (ST4000VX007)  (Interface: SATA, Form Factor: 3.5 inch)",image:"https://rukminim1.flixcart.com/image/416/416/l3dcl8w0/internal-hard-drive/p/p/y/st4000vx007-seagate-original-imageg5awvd5zpve.jpeg?q=70"},
    {name:"Mi X Series 108 cm (43 inch) Ultra HD (4K) LED Smart Android TV with Dolby Vision and 30W Dolby Audio (2022 Model)",image:"https://rukminim1.flixcart.com/image/416/416/xif0q/television/5/c/k/-original-imaggsnkne4n5mvh.jpeg?q=70"},
    {name:"Seagate SkyHawk 4 TB Surveillance Systems Internal Hard Disk Drive (HDD) (ST4000VX007)  (Interface: SATA, Form Factor: 3.5 inch)",image:"https://rukminim1.flixcart.com/image/416/416/l3dcl8w0/internal-hard-drive/p/p/y/st4000vx007-seagate-original-imageg5awvd5zpve.jpeg?q=70"},
    {name:"POCO C50 (Royal Blue, 32 GB)  (2 GB RAM)",image:"https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/t/a/x/-original-imaghmtch6qfmfxg.jpeg?q=70"},
    {name:"Mi X Series 108 cm (43 inch) Ultra HD (4K) LED Smart Android TV with Dolby Vision and 30W Dolby Audio (2022 Model)",image:"https://rukminim1.flixcart.com/image/416/416/xif0q/television/5/c/k/-original-imaggsnkne4n5mvh.jpeg?q=70"},
    {name:"Seagate SkyHawk 4 TB Surveillance Systems Internal Hard Disk Drive (HDD) (ST4000VX007)  (Interface: SATA, Form Factor: 3.5 inch)",image:"https://rukminim1.flixcart.com/image/416/416/l3dcl8w0/internal-hard-drive/p/p/y/st4000vx007-seagate-original-imageg5awvd5zpve.jpeg?q=70"},
    {name:"Mi X Series 108 cm (43 inch) Ultra HD (4K) LED Smart Android TV with Dolby Vision and 30W Dolby Audio (2022 Model)",image:"https://rukminim1.flixcart.com/image/416/416/xif0q/television/5/c/k/-original-imaggsnkne4n5mvh.jpeg?q=70"},
    {name:"Seagate SkyHawk 4 TB Surveillance Systems Internal Hard Disk Drive (HDD) (ST4000VX007)  (Interface: SATA, Form Factor: 3.5 inch)",image:"https://rukminim1.flixcart.com/image/416/416/l3dcl8w0/internal-hard-drive/p/p/y/st4000vx007-seagate-original-imageg5awvd5zpve.jpeg?q=70"},
    {name:"Seagate SkyHawk 4 TB Surveillance Systems Internal Hard Disk Drive (HDD) (ST4000VX007)  (Interface: SATA, Form Factor: 3.5 inch)",image:"https://rukminim1.flixcart.com/image/416/416/l3dcl8w0/internal-hard-drive/p/p/y/st4000vx007-seagate-original-imageg5awvd5zpve.jpeg?q=70"}
   
];




const discountproducts=[
  {name:"Saffola Peanut Butter, Creamy, High Protein , Only Jaggery, No Refined Sugar 850 g",image:"https://rukminim1.flixcart.com/image/416/416/l26hdow0/jam-spread/5/o/m/900-peanut-butter-creamy-plastic-bottle-1-nut-butter-saffola-original-imagdh3yrvhtc6vx.jpeg?q=70"},
  {name:"Sunfeast Dark Fantasy Choco Fills Cream Filled  (600 g",image:"https://rukminim1.flixcart.com/image/416/416/l55nekw0/cookie-biscuit/6/6/o/600-choco-fills-600g-1-sunfeast-dark-fantasy-original-imagfw9h6zkkztk8.jpeg?q=70"},
  {name:"Ketofy Zero Sugar | Stevia & Monk Fruit Sweetener | Ultra Low GI | Sugar Free | Keto Sweetener  (400 g)",image:"https://rukminim1.flixcart.com/image/416/416/xif0q/artificial-sweetener/q/d/e/400-zero-sugar-stevia-monk-fruit-sweetener-ultra-low-gi-sugar-original-imagqdumyxpzuph3.jpeg?q=70"},
  {name:"JBL C150SI with One Button Universal Remote Wired Headset  (Black, In the Ear)",image:"https://rukminim1.flixcart.com/image/612/612/juwzf680/headphone-refurbished/7/h/k/z-c100si-jbl-original-imaffxja5vmgwudz.jpeg?q=70"}
];

    return <div id='MainPage'>
           <div id='adscontainer'>
           <Ads ads={["https://img.staticbg.com/images/oaupload/ser1/banggood/images/FA/44/602f9da3-1e67-4f70-b00b-a723090cc2a1.jpg","https://i.pinimg.com/736x/32/2b/8c/322b8cbebfc4a5ecbdcea18996d66d81.jpg","https://th.bing.com/th/id/OIP.nYiGky-Wp-3oPZ6U_1sWmAHaFW?pid=ImgDet&rs=1","https://i.pinimg.com/originals/68/7a/97/687a97fd0e5544f6114a777c7f206014.jpg","https://i5.walmartimages.com/asr/6a1f6c7b-1c9f-4f86-a0d1-1b9159f90160.14b6ae279fd438296768df54313fdb8a.jpeg"]}/>
           </div>
          <div id='body' style={{paddingTop:'8%'}}>
          <List name="Trending Products of the Month"  products={products}/>
          <List name="Festival Specials"  products={products}/>
          <List name="Big Discounts offers"  products={discountproducts}/>
          </div>
    </div>;
}
export default MainPage;