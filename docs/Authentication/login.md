---
sidebar_position: 1
---

# Login

Use your web or mobile login credentials


- `username`: Your username `string`

- `password`: Your password `string`

```python
import requests
import json
payload = {
    "username":"tyty",
    "password":"wacoco#"
}
# jsonify the payload
data = json.dumps(payload)

```

### Send a post request with the payload

```python
url = "https://subpadi.com/rest-auth/login/"
res = requests.post(url, data=data)
```

### Response 

```bash
{
    "key": "eacf1ab727d134b254361d8bfc28a2bf6ab0a111"
}
```
View code in other programming languages [here](https://documenter.getpostman.com/view/18149105/2s93CRJqgM#b9b1e802-d90a-4c4e-a96f-61aae9dbcd99)