from dbQuery import *
import boto3

returns = {
    '1996': 1300,
    '1997': 1300,
    '1998': 1101,
    '1999': 1010,
    '2000': 920,
    '2001': 830,
    '2002': 735,
    '2003': 640,
    '2004': 550
}

dynamodb = boto3.resource('dynamodb', region_name='us-west-2')

# put_strategy('Someting_wong', 'Futures', returns, dynamodb)
#delete_Strategy('Test_strategy2', 'Test_asset', dynamodb)
put_strategy(
    'Test_strategy4', 'Test_assets3', returns,
    'Nisi velit non commodo esse Lorem. Aute laboris sint Lorem nostrud.',
    {'SharpieColor': 1}, dynamodb)
# table = dynamodb.create_table(
#     TableName='Strategies',
#     KeySchema=[
#         {
#             'AttributeName': 'strategy',
#             'KeyType': 'HASH'  # Partition key
#         },
#         {
#             'AttributeName': 'assets',
#             'KeyType': 'RANGE'  # Sort key
#         }
#     ],
#     AttributeDefinitions=[
#         {
#             'AttributeName': 'strategy',
#             'AttributeType': 'S'
#         },
#         {
#             'AttributeName': 'assets',
#             'AttributeType': 'S'
#         },
#     ],
#     ProvisionedThroughput={
#         'ReadCapacityUnits': 10,
#         'WriteCapacityUnits': 10
#     })
user = {
    'Username': 'Browser',
    'Password': 'Password!!!!!!!!!!!!!!!!!!!!!',
    'FirstName': 'FirstName',
    'LastName': 'LastName',
    'Email': 'Email',
    'City': 'City',
    'Country': 'Country',
    'PostCode': 'PostCode',
    'AboutMe': 'AboutMe'
}

#put_user(user, dynamodb)

#update_user('Browser', user, dynamodb)
#delete_user('username', dynamodb)

#print(get_user('Browser', dynamodb))