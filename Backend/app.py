# app.py
from flask import Flask, request, jsonify
from flask_cors import CORS 

app = Flask(__name__)
CORS(app) 

@app.route('/api/echo', methods=['POST'])
def echo():
    try:
        data = request.get_json()
        if 'data' in data:
            response_data = {'response': "Message from backend:Hello \n Your test:"+data['data']}
            return jsonify(response_data)
        else:
            return jsonify({'error': 'Invalid data format'}), 400
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0',port=5000,
        # debug=True
        )
    
