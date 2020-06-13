from flask import Flask
from flask import jsonify
from flask_cors import CORS
import boto3
from dbQuery import *
import decimal
import json

class DecimalEncoder(json.JSONEncoder):
    def default(self, o):
        if isinstance(o, decimal.Decimal):
            return str(o)
        return super(DecimalEncoder, self).default(o)

app = Flask(__name__)
app.json_encoder=DecimalEncoder
# enable CORS
CORS(app, resources={r'/*': {'origins': '*'}})

dynamodb = boto3.resource('dynamodb', region_name="us-west-2")

@app.route('/all_strats')
def index():
    return jsonify(get_all_strategies(dynamodb))

if(__name__ == "__main__"):
    app.run(debug=True)