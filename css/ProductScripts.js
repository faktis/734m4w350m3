
                var ProductName;
                var i = 0;
                var ShoppingBag = new Array();
            
                function AddItemToShoppingBag(Name){    // sets ProductName to coresponding string parameter
                    switch(Name) {

                        case "LasseDAN":
                        ProductName =  "Lasse (Danish Swine)";
                        break;
                        
                        case "OlofDAN":
                        ProductName =  "Olof (Danish Swine)";
                        break;
                        case "LasseSWE":
                        ProductName =  "Lasse (Swedish Pig)";
                        break;
                        
                        case "OlofSWE":
                        ProductName =  "Olof (Swedish Pig)";
                        break;

                        case "LasseICE":
                        ProductName =  "Lasse (Icelandic Pig)";
                        break;
                        
                        case "OlofICE":
                        ProductName =  "Olof (Icelandic Pig)";
                        break;
                        default:
                          ProductName = "Error";
                      }

                ShoppingBag[i] = ProductName; // Add product to shoping bag
                 i++;
                window.alert("Added " + ProductName +" to you shopping cart!") // just some thing that tells you it worked
                }
             

             function DisplayShoppingBag(){ // Welp vars dies when you leave a page. . . . .  .
                 ShoppingBag.forEach(element => {
                    window.alert(element);                     
                 });
                
             }
             // <button class="buyButton" type="button" onclick="DisplayShoppingBag()">View Shopping Bag</button>
             // View the shopping bag you put all yo pigs in
             // variables are terminated when you leave the page tho........