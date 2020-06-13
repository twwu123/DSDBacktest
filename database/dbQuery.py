from botocore.exceptions import ClientError
from boto3.dynamodb.conditions import Key
import json
from decimal import Decimal

def put_strategy(strategy, assets, returns, dynamodb):
    table = dynamodb.Table('Strategies')
    response = table.put_item(
        Item={
            'strategy': strategy,
            'assets': assets,
            'returns': returns,
        }
    )
    return response


def get_strategy(strategy, assets, dynamodb):
    table = dynamodb.Table('Strategies')

    try:
        response = table.get_item(Key={'strategy': strategy, 'assets': assets})
    except ClientError as e:
        print(e.response['Error']['Message'])
    else:
        return response['Item']

def get_strategy_by_strategy(strategy, dynamodb):
    table = dynamodb.Table('Strategies')

    response = table.query(
        KeyConditionExpression=Key('strategy').eq(strategy)
    )
    return response['Items']


def get_strategy_by_asset(assets, dynamodb):
    table = dynamodb.Table('Strategies')

    response = table.query(
        KeyConditionExpression=Key('assets').eq(assets)
    )
    return response['Items']

def get_all_strategies(dynamodb):
    table = dynamodb.Table('Strategies')
    scan_kwargs = {
        'ProjectionExpression': "strategy, assets, #rt",
        'ExpressionAttributeNames': {"#rt": "returns"}
    }

    done = False
    start_key = None
    response = ''
    while not done:
        if start_key:
            scan_kwargs['ExclusiveStartKey'] = start_key
        response = table.scan(**scan_kwargs)
        start_key = response.get('LastEvaluatedKey', None)
        done = start_key is None
    return response['Items']


def update_strategy(strategy, assets, returns, dynamodb):
    table = dynamodb.Table('Strategies')

    response = table.update_item(
        Key={
            'strategy': strategy,
            'assets': assets
        },
        ExpressionAttributeValues={
            'returns': returns
        },
        ReturnValues="UPDATED_NEW"
    )
    return response



