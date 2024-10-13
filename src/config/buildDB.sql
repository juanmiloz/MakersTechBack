
CREATE TABLE Products (
   ProductID SERIAL PRIMARY KEY,
   Name VARCHAR(255) NOT NULL,
   Brand VARCHAR(100) NOT NULL,
   Description TEXT,
   Price NUMERIC(10, 2) NOT NULL,
   Stock INT NOT NULL,
   Category VARCHAR(100),
   Image text,
   CreatedDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Users (
   UserID SERIAL PRIMARY KEY,
   Username VARCHAR(100) NOT NULL,
   Email VARCHAR(255) UNIQUE NOT NULL,
   Password VARCHAR(255) NOT NULL,
   CreatedDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE Preferences (
    PreferenceID SERIAL PRIMARY KEY,
    UserID INT NOT NULL REFERENCES Users(UserID) ON DELETE CASCADE,
    Category VARCHAR(100),  
    Brand VARCHAR(100),    
    MaxPrice NUMERIC(10, 2) CHECK (MaxPrice >= 0),  -- Precio máximo que el usuario está dispuesto a pagar
    CreatedDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);




INSERT INTO Products (Name, Brand, Description, Price, Stock, Category, image)
VALUES 
('HP Pavilion 15', 'HP', 'Laptop HP Pavilion 15 con procesador Intel Core i5, 8GB RAM y 256GB SSD.', 799.99, 2, 'Computadora','https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/126560845_01/w=1500,h=1500,fit=pad'),
('Dell XPS 13', 'Dell', 'Ultrabook Dell XPS 13 con pantalla táctil, Intel Core i7, 16GB RAM y 512GB SSD.', 1199.99, 1, 'Computadora', 'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/13-9340/pdp/laptop-xps-13-9340-pdp-design-dynamic-thumb-sl.psd?fmt=jpg&wid=1920&hei=1080'),
('MacBook Pro 13', 'Apple', 'Laptop Apple MacBook Pro 13 con chip M1, 8GB RAM y 256GB SSD.', 1299.99, 1, 'Computadora', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5TtZuVkVuLtqgRbg_pOSTkih0FFR0ieqNWA&s'),
('iPhone 13', 'Apple', 'Teléfono Apple iPhone 13 con pantalla de 6.1 pulgadas y 128GB de almacenamiento.', 799.99, 5, 'Teléfono', 'https://compras.tigo.com.co/arquivos/ids/160020-1000-1000/iPhone_13_Midnight_PDP_Image_position-2__CLCO_v1.png?v=637703369147830000'),
('Samsung Galaxy S21', 'Samsung', 'Teléfono Samsung Galaxy S21 con pantalla de 6.2 pulgadas, 128GB y 8GB RAM.', 699.99, 3, 'Teléfono', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVJnh44ZZhW9EfS-Owsx59tbOeu6ccLlkgAw&s'),
('Lenovo ThinkPad X1', 'Lenovo', 'Laptop Lenovo ThinkPad X1 Carbon con Intel Core i7, 16GB RAM y 512GB SSD.', 1399.99, 2, 'Computadora', 'https://copservir.vtexassets.com/arquivos/ids/1399932-800-auto?v=638566537690870000&width=800&height=auto&aspect=true');

//solo despues de registrarse con un usuario desde postman o aplicacion
INSERT INTO Preferences ("userId" , category , brand , "maxPrice")
VALUES 
(1, 'Computadora', 'Dell', 1200.00);  -- Prefiere computadoras Dell con un precio máximo de $1200


--! solo despues de registrarse con un usuario desde postman o aplicacion
INSERT INTO Preferences ("userId" , category , brand , "maxPrice")
VALUES 
(1, 'Computadora', 'Dell', 1200.00);  -- Prefiere computadoras Dell con un precio máximo de $1200
