from botocore.exceptions import ClientError
from boto3.dynamodb.conditions import Key
import json
from decimal import Decimal


def put_strategy(strategy, assets, returns, description, params, dynamodb):
    table = dynamodb.Table('Strategies')
    try:
        response = table.put_item(
            Item={
                'strategy': strategy,
                'assets': assets,
                'returns': returns,
                'description': description,
                'params': params
            })
    except ClientError as e:
        print(e.response['Error']['Message'])
    else:
        return response


def delete_Strategy(strategy, assets, dynamodb):
    table = dynamodb.Table('Strategies')
    try:
        response = table.delete_item(Key={
            'strategy': strategy,
            'assets': assets
        })
    except ClientError as e:
        print(e.response['Error']['Message'])
    else:
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

    response = table.query(KeyConditionExpression=Key('strategy').eq(strategy))
    return response['Items']


def get_strategy_by_asset(assets, dynamodb):
    table = dynamodb.Table('Strategies')

    response = table.query(KeyConditionExpression=Key('assets').eq(assets))
    return response['Items']


def get_all_strategies(dynamodb):
    table = dynamodb.Table('Strategies')
    scan_kwargs = {
        'ProjectionExpression': 'strategy, assets, #rt, description, params',
        'ExpressionAttributeNames': {
            '#rt': 'returns'
        }
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


def update_strategy(strategy, assets, returns, description, params, dynamodb):
    table = dynamodb.Table('Strategies')
    try:
        response = table.update_item(
            Key={
                'strategy': strategy,
                'assets': assets
            },
            UpdateExpression='set #r=:r, #d=:description, #p=:params',
            ExpressionAttributeValues={
                ':r': returns,
                ':description': description,
                ':params': params
            },
            ExpressionAttributeNames={
                '#r': 'returns',
                '#d': 'description',
                '#p': 'params'
            },
            ReturnValues='UPDATED_NEW')
    except ClientError as e:
        print(e.response['Error']['Message'])
    else:
        return response


def put_user(data, dynamodb):
    try:
        table = dynamodb.Table('Users')
        response = table.put_item(
            Item={
                'Username': data['Username'],
                'Password': data['Password'],
                'FirstName': data['FirstName'],
                'LastName': data['LastName'],
                'Email': data['Email'],
                'City': data['City'],
                'Country': data['Country'],
                'PostCode': data['PostCode'],
                'Aboutme': data['AboutMe']
            },
            ConditionExpression='attribute_not_exists(Username)')
    except ClientError as e:
        print(e.response['Error']['Message'])
    else:
        return response


def get_user(Username, dynamodb):
    table = dynamodb.Table('Users')

    try:
        response = table.get_item(Key={'Username': Username})
    except ClientError as e:
        print(e.response['Error']['Message'])
    else:
        return response['Item']


def update_user(Username, data, dynamodb):
    table = dynamodb.Table('Users')
    try:
        response = table.update_item(
            Key={'Username': Username},
            UpdateExpression=
            'set Password=:Password, FirstName=:FirstName, LastName=:LastName, Email=:Email, City=:City, Country=:Country,PostCode=:PostCode, AboutMe=:AboutMe',
            ExpressionAttributeValues={
                ':Password': data['Password'],
                ':FirstName': data['FirstName'],
                ':LastName': data['LastName'],
                ':Email': data['Email'],
                ':City': data['City'],
                ':Country': data['Country'],
                ':PostCode': data['PostCode'],
                ':AboutMe': data['AboutMe']
            },
            ReturnValues='UPDATED_NEW')
    except ClientError as e:
        print(e.response['Error']['Message'])
    else:
        return response


def get_all_users(dynamodb):
    table = dynamodb.Table('Users')
    scan_kwargs = {
        'ProjectionExpression':
        'Username, Password, FirstName, LastName, Email, City, Country, PostCode, AboutMe'
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


def delete_user(Username, dynamodb):
    table = dynamodb.Table('Users')
    try:
        response = table.delete_item(
            Key={'Username': Username},
            ConditionExpression='attribute_exists(Username)')
    except ClientError as e:
        print(e.response['Error']['Message'])
    else:
        return response