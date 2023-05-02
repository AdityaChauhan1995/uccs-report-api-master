# UCCS Report API

## API Documentation
Below sections provides the various APIs supported by the API Module.

### Login
To allow access to the UCCS Reporting API module. A session will timeout in 30 min if not activty happen on the same session.
#### Path
```
POST /v1/user/login
```
#### Headers
```
Content-Type: application/json
```
#### Request Body
```json
{
 "username": "test",
 "password": "test"
}
```
#### Response Body
```json
{
	"code": "0",
	"message": "SUCCESS",
	"response": {
		"sessionId": "9373648482739",	
	}
 	
}
```
### Get Requests
Provides a list of requests for an authenticated user
#### Path
```
GET /v1/request
```
#### Request Parameters
| Param Name     |Mandatory                      |Sample Value                 |
|----------------|-------------------------------|-----------------------------|
|sessionId       |Y					             |`837372827393`               |

#### Response Body
```json
{
	"code": "0",
	"message": "SUCCESS",
	"response": {
		"requests": [
			{
				"report": "",
				"reportType": "",
				"createdDate": "",
				"completedDate": "",
				"estimatedDuration": "",
				"downloadUrl": "",
			}
		]
	}
}
```

### Get Standard Reports
Provides a list of standard report for an authenticated user.
#### Path
```
GET /v1/report
```
#### Request Parameters
| Param Name     |Mandatory                      |Sample Value                 |
|----------------|-------------------------------|-----------------------------|
|sessionId       |Y					             |`837372827393`               |

#### Response Body
```json
{
	"code": "0",
	"message": "SUCCESS",
	"response": {
		"reports": [
			{
				"name": "",
				"type": "",
				"frequency": "",
				"estimatedDuration": "",
				"lastRun": "",
				"days2NextRun": "",
				"downloadUrl": "",
				"inputs": [
					{
						"columnName": "",
						"operator": "",
						"allowMultiple": true,
						"allowFile": true
						"allowedValues": [],
					}
				],
				"outputs": [
					{
						"seq": 1,	
						"columnName": "",
					}
				]
			}
		]
	}
}
```

### Get Adhoc Report Input Columns
Provides a list of standard report for an authenticated user.
#### Path
```
GET /v1/adhoc-report-input
```
#### Request Parameters
| Param Name     |Mandatory                      |Sample Value                 |
|----------------|-------------------------------|-----------------------------|
|sessionId       |Y					             |`837372827393`               |
|reportId        |Y					             |`123`                        |

#### Response Body
```json
{
	"code": "0",
	"message": "SUCCESS",
	"response": {
		"columns": [
			{"key": 1, "text": "columnName", "value": "columnName"}
		],
		"columnsMeta": [
			{
				"columnName": "",
				"allowedOperators": [
					{"key": 1, "text": "Equals", "value": "Equals},
				],
				"allowedValues": [
					{"key": 1, "text": "P1", "value": "P1},
				],
				"allowFile": true,
				"allowMultiple": true,
			}
		]
	}
}
```

### Get Adhoc Report Output Columns
Provides a list of standard report for an authenticated user.
#### Path
```
GET /v1/adhoc-report-output
```
#### Request Parameters
| Param Name     |Mandatory                      |Sample Value                 |
|----------------|-------------------------------|-----------------------------|
|sessionId       |Y					             |`837372827393`               |
|reportId        |Y					             |`123`                        |

#### Response Body
```json
{
	"code": "0",
	"message": "SUCCESS",
	"response": {
		"columns": [
			{"key": 1, "text": "columnName", "value": "columnName"}
		]
	}
}
```

### Create Request
To register a request for a specific report.
#### Path
```
POST /v1/request
```
#### Headers
```
Content-Type: application/json
```
#### Request Parameters
| Param Name     |Mandatory                      |Sample Value                 |
|----------------|-------------------------------|-----------------------------|
|sessionId       |Y					             |`837372827393`               |
|reportId	     |Y					             |`123`                        |

#### Request Body
```json
{
	"inputs": [
		{
			"seq": 1,
			"columnName": "",
			"opeator": "",
			"value": "",
			"values": [],
		}
	],
	"output": [
		{
			"seq": 1,
			"columnName": "",
		}
	]
}
```
#### Response Body
```json
{
	"code": "0",
	"message": "SUCCESS"
 	
}
```

### Logout
Logout from the application
#### Path
```
GET /v1/user/logout
```
#### Request Parameters
| Param Name     |Mandatory                      |Sample Value                 |
|----------------|-------------------------------|-----------------------------|
|sessionId       |Y					             |`837372827393`               |

#### Response Body
```json
{
	"code": "0",
	"message": "SUCCESS"
}
```
