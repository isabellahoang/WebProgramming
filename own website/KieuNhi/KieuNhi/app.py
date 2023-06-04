from flask import Flask, jsonify, request, send_file
from flask_restx import Api, Resource, fields
import sqlite3, os

app = Flask(__name__)
api = Api(app)

# Connect to SQLite database
conn = sqlite3.connect('products.db')
cursor = conn.cursor()

# Create products table if not exists
cursor.execute('''
    CREATE TABLE IF NOT EXISTS products (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        price REAL NOT NULL,
        img TEXT,
        category TEXT NOT NULL
    )
''')
conn.commit()
conn.close()

# Product model
product_model = api.model('Product', {
    'name': fields.String(required=True),
    'price': fields.Float(required=True),
    'img': fields.String,
    'category': fields.String(required=True)
})

# Add product information
@api.route('/product')
class ProductResource(Resource):
    @api.expect(product_model)
    def post(self):
        conn = sqlite3.connect('products.db')
        cursor = conn.cursor()
        data = api.payload

        name = data.get('name')
        price = data.get('price')
        img = data.get('img')
        category = data.get('category')

        # Insert product into database
        cursor.execute('INSERT INTO products (name, price, img, category) VALUES (?, ?, ?, ?)',
                       (name, price, img, category))
        conn.commit()
        conn.close()
        
        return {'message': 'Product added successfully'}, 201

# Get product information by category
@api.route('/product/<category>')
class ProductByCategoryResource(Resource):
    def get(self, category):
        conn = sqlite3.connect('products.db')
        cursor = conn.cursor()
        # Retrieve products from database based on category
        cursor.execute('SELECT * FROM products WHERE category = ?', (category,))
        rows = cursor.fetchall()
        conn.close()
        
        products = []
        for row in rows:
            product = {
                'id': row[0],
                'name': row[1],
                'price': row[2],
                'img': row[3],
                'category': row[4]
            }
            products.append(product)

        return {'products': products}
    
@app.route('/img/<filename>', methods=['GET'])
def get_img(filename):
    # Provide the file path for the file you want to download
    filepath = f'./img/{filename}'
    print(filepath)
    if os.path.isfile(filepath):
        return send_file(filepath)
    
    return 'File not found !', 404

if __name__ == '__main__':
    app.run()
