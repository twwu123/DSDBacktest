from dbQuery import *
import boto3

returns = {'1996': -5, '1997': 500000}

dynamodb = boto3.resource('dynamodb', region_name="us-west-2")
put_strategy("Someting_wong", 'Futures', returns, dynamodb)