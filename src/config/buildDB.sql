
CREATE TABLE Products (
   ProductID SERIAL PRIMARY KEY,
   Name VARCHAR(255) NOT NULL,
   Brand VARCHAR(100) NOT NULL,
   Description TEXT,
   Price NUMERIC(10, 2) NOT NULL,
   Stock INT NOT NULL,
   Category VARCHAR(100),
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




INSERT INTO Products (Name, Brand, Description, Price, Stock, Category)
VALUES 
('HP Pavilion 15', 'HP', 'Laptop HP Pavilion 15 con procesador Intel Core i5, 8GB RAM y 256GB SSD.', 799.99, 2, 'Computadora'),
('Dell XPS 13', 'Dell', 'Ultrabook Dell XPS 13 con pantalla táctil, Intel Core i7, 16GB RAM y 512GB SSD.', 1199.99, 1, 'Computadora'),
('MacBook Pro 13', 'Apple', 'Laptop Apple MacBook Pro 13 con chip M1, 8GB RAM y 256GB SSD.', 1299.99, 1, 'Computadora'),
('iPhone 13', 'Apple', 'Teléfono Apple iPhone 13 con pantalla de 6.1 pulgadas y 128GB de almacenamiento.', 799.99, 5, 'Teléfono'),
('Samsung Galaxy S21', 'Samsung', 'Teléfono Samsung Galaxy S21 con pantalla de 6.2 pulgadas, 128GB y 8GB RAM.', 699.99, 3, 'Teléfono'),
('Lenovo ThinkPad X1', 'Lenovo', 'Laptop Lenovo ThinkPad X1 Carbon con Intel Core i7, 16GB RAM y 512GB SSD.', 1399.99, 2, 'Computadora');

--! solo despues de registrarse con un usuario desde postman o aplicacion
INSERT INTO Preferences ("userId" , category , brand , "maxPrice")
VALUES 
(1, 'Computadora', 'Dell', 1200.00);  -- Prefiere computadoras Dell con un precio máximo de $1200
