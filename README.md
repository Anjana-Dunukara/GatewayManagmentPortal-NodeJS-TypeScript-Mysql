# TV Gateway Management Portal

The TV Gateway Management Portal is a REST API solution designed to manage gateways and their associated peripheral devices within a organization. The solution provides endpoints for CRUD operations on gateways and peripheral devices, adhering to industry standards for web development.

## Features

- **Gateway Management**: Create, read, update, and delete gateways with validation for serial number, name, and IPv4 address.
- **Peripheral Device Management**: Create, read, update, and delete peripheral devices associated with gateways, with a maximum limit of 10 devices per gateway.
- **Validation**: Ensure validation of gateway attributes and peripheral device data.
- **Testing**: Basic unit and API test suites for ensuring functionality and reliability.
- **Clean Architecture**: Utilizes TypeScript, Node.js, MySQL, and TypeORM with a focus on decoupling, code reuse, and maintainability.

## Installation

1. Clone the repository: `git clone https://github.com/your-username/tv-gateway-management.git`
2. Install dependencies: `npm install`
3. Configure database connection in `app.datasource.ts`
4. Run the application: `npm start`

## Usage

1. Access the API endpoints to manage gateways and peripheral devices.
2. Use appropriate HTTP methods (GET, POST, PUT, PATCH, DELETE) to interact with the resources.
3. Ensure data validation for gateway and peripheral device attributes.

## Contributing

Contributions are welcome! Feel free to fork the repository, make changes, and submit pull requests. Please follow the project's coding style and guidelines.

## License

This project is licensed under the [MIT License](LICENSE).
