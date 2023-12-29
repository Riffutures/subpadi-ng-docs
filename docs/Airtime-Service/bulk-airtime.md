---
sidebar_position: 5
---

# Buy Bulk Airtime

- `network`: Network Provider `int`
  - 1: 'MTN'
  - 2: 'GLO'
  - 3: '9MOBILE'
  - 4: 'AIRTEL'

- `amount`: Your password `string`
- `mobile_number`: Recipient number `string`
- `airtime_type`: Airtime type `string`
- `Port_number`: Port number default to **true** `string`

```python
import requests
import json
payload = {
"network": 1,
"amount" :"200",
"phone_number": "07062198688, 07062568688",
"airtime_type":"vtu"
}
user_token = 'eacf1ab727d134b254361d834c28a2bf6ab0a111'
headers = {
      "Content-Type": "application/json",
      "Authorization": f'Token {user_token}'
} 
# jsonify the payload
data = json.dumps(payload)

```

### Send a post request with the payload

```python
url = "https://bigisub.com/api/bulk-airtime/"
res = requests.post(url, data=data, headers=headers)
```

### Response 

```bash
{
    "id": 76,
    "airtime_type": "VTU",
    "network": 1,
    "tran_id": "Airtime-SVKjDfker7634",
    "paid_amount": "200.0",
    "mobile_number": "08011111111",
    "amount": "200",
    "plan_amount": "N200",
    "plan_network": "MTN",
    "balance_before": "535585.0",
    "balance_after": "535385.0",
    "Status": "successful",
    "create_date": "2023-12-13T16:20:26.041472",
    "Ported_number": true,
    "api_response": "TRANSACTION SUCCESSFUL",
    "ident": "20231213162024337872761638e639b6b7-814d-4d3a-9da0-dabdee3b8de9"
}
```

View code in other programming languages [here](https://documenter.getpostman.com/view/18149105/2s93CRJqgM#b9b1e802-d90a-4c4e-a96f-61aae9dbcd99)