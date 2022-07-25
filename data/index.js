export const project = {
	title: "Peculyn Superstores",
	currency: "₦",
	fee: 0.0,
	descContent:
		"Peculyn international superstores is an online marketplace that provides a conducive platform for sellers to connect to buyers, it takes care of the hassles of buying from a seller not close, to you, trust issues, delivery problems and communication barrier. It's main purpose is to make buying and selling online easy",
};

export const categories = [
	{
		id: 1,
		title: "men's wear",
		link: "categories/men",
		img1: "/images/p2.jpeg",
		img2: "/images/p3.jpeg",
	},
	{
		id: 2,
		title: "women's wear",
		link: "categories/women",
		img1: "/images/p2.jpeg",
		img2: "/images/p3.jpeg",
	},
	{
		id: 3,
		title: "unisex accessories",
		link: "categories/unisex",
		img1: "/images/p2.jpeg",
		img2: "/images/p3.jpeg",
	},
	{
		id: 4,
		title: "children wear",
		link: "categories/children",
		img1: "/images/p2.jpeg",
		img2: "/images/p3.jpeg",
	},
	{
		id: 5,
		title: "electronics",
		link: "categories/electronics",
		img1: "/images/p2.jpeg",
		img2: "/images/p3.jpeg",
	},
	{
		id: 6,
		title: "hair",
		link: "categories/hair",
		img1: "/images/p2.jpeg",
		img2: "/images/p3.jpeg",
	},
	{
		id: 7,
		title: "phone accessories",
		link: "categories/phone-accessories",
		img1: "/images/p2.jpeg",
		img2: "/images/p3.jpeg",
	},
	{
		id: 8,
		title: "phones",
		link: "categories/phones",
		img1: "/images/p2.jpeg",
		img2: "/images/p3.jpeg",
	},
	{
		id: 9,
		title: "laptops",
		link: "categories/laptops",
		img1: "/images/p2.jpeg",
		img2: "/images/p3.jpeg",
	},
	{
		id: 10,
		title: "bags",
		link: "categories/bags",
		img1: "/images/p2.jpeg",
		img2: "/images/p3.jpeg",
	},
	{
		id: 11,
		title: "foods",
		link: "categories/foods",
		img1: "/images/p2.jpeg",
		img2: "/images/p3.jpeg",
	},
	{
		id: 12,
		title: "cosmetics",
		link: "categories/cosmetics",
		img1: "/images/p2.jpeg",
		img2: "/images/p3.jpeg",
	},
	{
		id: 13,
		title: "grocries",
		link: "categories/grocries",
		img1: "/images/p2.jpeg",
		img2: "/images/p3.jpeg",
	},
];

export const decodeHtml = (html) => {
	var txt = document.createElement("textarea");
	txt.innerHTML = html;
	return txt.value;
};

export const naira = Intl.NumberFormat("en-US", {
	style: "currency",
	currency: "NGN",
	useGrouping: false,
	maximumSignificantDigits: 3,
});

export const currencyFractionDigits = new Intl.NumberFormat("en-US", {
	style: "currency",
	currency: "NGN",
}).resolvedOptions().maximumFractionDigits;

export const fileName = (file) => {
	if (file === undefined) return;
	return file.replace(/^.*[\\\/]/, "");
};

export const capitalizeFirstLetter = (string) => {
	return string.charAt(0).toUpperCase() + string.slice(1);
};

export const staleData = {
	sn: "20",
	unique_key: "n093j32j2309u238u32010912",
	name: "Broiler",
	price: "1700.00",
	old_price: "1950.00",
	short_desc: "sd",
	category: "protein",
	in_stock: "1000000",
	img_1: "../assets/images/protein/chicken-wing.png",
	img_2: "../assets/images/protein/broiler.png",
	img_3: "../assets/images/protein/broiler.png",
	img_4: "../assets/images/protein/broiler.png",
	img_5: "../assets/images/protein/broiler.png",
	long_desc: "ld",
	reviews: "1",
	purchases: "0",
	date_added: "8/05/2021",
	measurement: "Kg",
	owner: "",
	stale: true,
};

export const truncate = (input, limit = 15) => {
	if (input) {
		return input.length > limit ? `${input.substring(0, limit)}...` : input;
	} else return input;
};

export const emptyBillingInfo = {
	address: "",
	town: "",
	state: "",
	number: "",
	firstName: "",
	lastName: "",
	address2: "",
	apartment: "",
	town: "",
};

export const uniqueID = () => {
	return new Date().getTime().toString().concat(performance.now());
};

export const validateInput = (
	address,
	town,
	state,
	number,
	email,
	firstName,
	lastName,
	delivery_option
) => {
	if (
		address == "" ||
		address == undefined ||
		town == "" ||
		town == undefined ||
		state == "" ||
		state == undefined ||
		number == "" ||
		number == undefined ||
		email == "" ||
		email == undefined ||
		firstName == "" ||
		firstName == undefined ||
		lastName == "" ||
		lastName == undefined ||
		delivery_option == "" ||
		delivery_option == undefined
	) {
		return false;
	} else {
		return true;
	}
};

export const emailTemp = (data) => {
	return `<html lang="en">
                <head>  
                      
                    <link rel="preconnect" href="https://fonts.googleapis.com">
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400&display=swap" rel="stylesheet">
                    
                    <style>
                    
                       body{
                            font-family: \'Nunito\', sans-serif;
                            font-size: 0.96em;
                            line-height: 150%;
                       }
                       
                       p{
                            font-size: 0.96em;
                       }
                       
                       h4{
                            font-size: 1.1em;
                       }
                       
                        main{
                            width: 55%;
                            margin: 0 auto;
                        }
                        
                        @media only screen and (max-width: 1000px)  {
                          main {
                                width: 100%; 
                                margin: 0 auto;
                          }
                        }
                        
                        table {
                            border-collapse: collapse;
                            width: 100%;
                            font-size: 0.96em;
                        }
                        
                        td, th {
                            border: 1px solid #dddddd;
                            text-align: left;
                            padding: 8px;
                        }
                        
                        tr:nth-child(even) {
                            background-color: #dddddd;
                        }
                    </style>
                </head>
                
                <body>
                    <main>
                        <div class="welcome-msg">
                            <p>
                                Dear '.${data.name}.',
                                <br>  <br>
                                Thank you for choosing peculyn. Here\'s a summary of your order.
                            </p>
                            
                            <h4>Order Details</h4>
                            <p> <b> Order Date :  </b> ${data.date_init} </p>
                            <p style="display: none"> <b> Order Number :  </b> ${
								data.order_id
							} </p>
                            <p> <b> Transaction ID :  </b> ${data.tran_id} </p>
                            <p> <b> Address :  </b> ${data.address1}, ${
		data.address2
	} </p>
                            <p> <b> Payment Source :  </b> Paystack </p>
                            <p> <b> Delivery Type :  </b> ${
								data.delivery_option
							} </p>
                            <p> <b> Total :  </b> '.$site_currency.' ${
								data.amount
							}</p>
                        </div>
                        
                        <div class="order-msg">
                            <table>
                              <tr>
                                <th>Item Name</th>
                                <th>Qty</th>
                                <th>Price</th>
                              </tr>
                              ${data.items.map(
									(el) =>
										`<tr>
                                    <td> ${el.name} </td>
                                    <td> ${el.qty} </td>
                                    <td> ₦${el.price} </td>
                                </tr>`
								)}
                              <tr>
                                  <td> Transaction Fee</td>
                                  <td> - </td>
                                  <td> ${project.currency} ${project.fee}</td>
                              </tr>
                              <tr>
                                  <th colspan="2"> Total</th>
                                  <td> ${project.currency} ${data.total}</td>
                              </tr>
                            </table>
                        </div>
                        
                         <div class="order-break-msg">
                            
                        </div>
                        
                        <p>Your Goods would be delivered to the address stated above, for more enquire and information please contact us <br><br>
                        '.$site_number.' <br>
                        '.$site_email.'</p>
                    </main>
                </body>
                
            </html>`;
};
