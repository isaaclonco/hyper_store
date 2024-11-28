CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,            -- Identificador único do usuário
    name VARCHAR(100) NOT NULL,                   -- Nome do usuário
    email VARCHAR(150) UNIQUE NOT NULL,           -- Email único
    password_hash VARCHAR(255) NOT NULL,          -- Senha armazenada como hash
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  -- Data de criação
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP -- Data da última atualização
);

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
