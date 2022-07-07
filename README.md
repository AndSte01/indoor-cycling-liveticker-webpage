Live Ticker for indoor cycling events

# Useful Links
Multi page setup:
- https://www.techomoro.com/how-to-create-a-multi-page-website-with-react-in-5-minutes/

3rd-Party-Libs
- https://sumn2u.medium.com/loading-third-party-library-in-reactjs-b01c049df8d5

Theme:
- https://bootswatch.com/lux/

Thinking in React
- https://reactjs.org/docs/thinking-in-react.html

Swiping
- https://github.com/FormidableLabs/react-swipeable

Redux + react-table
- https://codesandbox.io/s/9y7kg?file=/src/Table.js

Redux Database:
- https://github.com/nerdgeschoss/redux-database


# What is in wich folder
Below is the description of the /src folder

# results api basics
status:
| status        | meaning                    |
| ------------- | -------------------------- |
| `scheduled`   | planed but not jet started |
| `in_progress` | currently on progress      |
| `done`        | finished                   |

# layout of internal tables

| ID                                      | date | name | location | user | areas      | isLive     | featureSet |
| --------------------------------------- | ---- | ---- | -------- | ---- | ---------- | ---------- | ---------- |
| INT NOT NULL AUTO_INCREMENT PRIMARY KEY | date | text | text     | text | TINYINT(1) | TINYINT(1) | TINYINT(1) |

| ID                                      | ts                                                                           | competition | type       | finished   |
| --------------------------------------- | ---------------------------------------------------------------------------- | ----------- | ---------- | ---------- |
| INT NOT NULL AUTO_INCREMENT PRIMARY KEY | TIMESTAMP NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp() | integer     | TINYINT(1) | TINYINT(1) |

| ID  | ts  | competition | discipline | start_number | name | club | score_submitted | score_accomplished | time |
| --- | --- | ----------- | ---------- | ------------ | ---- | ---- | --------------- | ------------------ | ---- |
|     |     | integer     | integer    | integer      | text | text | float           | float              | int  |


# how categories can be decoded
| `0`   | `000`      | `0`    | `000` |
| ----- | ---------- | ------ | ----- |
| error | Discipline | gender | age   |

|       | Discipline                     |
| ----- | ------------------------------ |
| `000` | Single artistic cycling        |
| `001` | Pair artistic cycling          |
| `010` | Artistic Cycling Team 4 (ACT4) |
| `011` | Artistic Cycling Team 6 (ACT6) |
| `110` | Unicycle Team 4                |
| `111` | Unicycle Team 6                |

|     | gender     |
| --- | ---------- |
| `0` | male, open |
| `1` | female     |

|       | age         |
| ----- | ----------- |
| `001` | Pupils  U11 |
| `010` | Pupils  U13 |
| `011` | Pupils  U15 |
| `100` | Juniors U19 |
| `101` | Elite   O18 |

# things not to forget
make fetches support cookies (https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/withCredentials)