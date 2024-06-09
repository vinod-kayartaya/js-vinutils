# vinjsutils

> Bunch of useful JavaScript utility functions

<pre>
        _       _           _   _ _     
       (_)     (_)         | | (_) |    
 __   ___ _ __  _ ___ _   _| |_ _| |___ 
 \ \ / / | '_ \| / __| | | | __| | / __|
  \ V /| | | | | \__ \ |_| | |_| | \__ \
   \_/ |_|_| |_| |___/\__,_|\__|_|_|___/
              _/ |                      
             |__/ 
</pre>

```sh
npm install vinjsutils
```

### `printTable`

Example usage:

```javascript
import { printTable } from 'vinjsutils';

const customers = [
  {
    id: 1,
    first_name: 'Devonne',
    last_name: 'Tomalin',
    gender: 'Female',
    email: 'dtomalin0@360.cn',
    phone: '829-180-2277',
  },
  {
    id: 2,
    first_name: 'Nehemiah',
    last_name: 'Kobu',
    gender: 'Male',
    email: 'nkobu1@hibu.com',
    phone: '700-790-2424',
  },
  {
    id: 3,
    first_name: 'Darrelle',
    last_name: 'Duffrie',
    gender: 'Female',
    email: 'dduffrie2@storify.com',
    phone: '591-446-8117',
  },
];
printTable(customers);
```

Output:

```sh
+----+------------+-----------+--------+-----------------------+--------------+
| id | first_name | last_name | gender | email                 | phone        |
|----|------------|-----------|--------|-----------------------|--------------|
| 1  | Devonne    | Tomalin   | Female | dtomalin0@360.cn      | 829-180-2277 |
| 2  | Nehemiah   | Kobu      | Male   | nkobu1@hibu.com       | 700-790-2424 |
| 3  | Darrelle   | Duffrie   | Female | dduffrie2@storify.com | 591-446-8117 |
+----+------------+-----------+--------+-----------------------+--------------+
```
