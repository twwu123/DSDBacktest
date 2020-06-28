from dbQuery import *
import boto3

returns = {'1996': -5, '1997': 500000, '2011': 200}

dynamodb = boto3.resource('dynamodb', region_name='us-west-2')
# put_strategy('Someting_wong', 'Futures', returns, dynamodb)
#update_strategy('Someting_wong', 'Futures', returns, dynamodb)

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