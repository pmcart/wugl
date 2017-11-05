var seeder = require('mongoose-seed');

// Connect to MongoDB via Mongoose
seeder.connect('mongodb://localhost/mean-app', function() {

    // Load Mongoose models
    seeder.loadModels([
        './src/models/location.js'
    ]);

    // Clear specified collections
    seeder.clearModels(['LocationObject'], function() {

        // Callback to populate DB once collections have been cleared
        seeder.populateModels(data, function() {
            seeder.disconnect();
        });

    });
});

// Data array containing seed data - documents organized by Model
var data = [{
    'model': 'LocationObject',
    'documents': [{
            'name': 'Voodoo',
            'id': '1001',
            'city': 'Letterkenny'
        },
        {
            'name': 'Warehouse',
            'id': '1002',
            'city': 'Letterkenny'
        }
    ]
}];