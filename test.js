var customerApi = function (app) {
    var custList = [{ id: 1, name: 'Ram', email: 'ram@gmail.com', mobile: '9876543210', office: 'Hadapsar', addressLine1: '12, ABC Apartment', 
					addressLine2: 'Pune', city: 'Pune', zip: '411027'},
					{ id: 2, name: 'Sham', email: 'sham@gmail.com', mobile: '9876543210', office: 'Borivali', addressLine1: 'XYZ Plaza', 
					addressLine2: 'Mumbai', city: 'Mumbai', zip: '411027'}];

    app.get('/api/customer', (req, res) => {
        res.send(custList);
    });
    app.post('/api/customer', (req, res) => {
        custList.push(
            { id: 3, name: 'Nilesh', email: 'nilesh@gmail.com', mobile: '9876543210', office: 'Hadapsar', addressLine1: 'Nasik',
			addressLine2: 'Nasik', city: 'Nasik', zip: '411027'}
        );
        res.send(custList);
        console.log('This is post api for customer');
    });
};
module.exports = customerApi;