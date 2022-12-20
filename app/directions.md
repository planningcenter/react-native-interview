## Assignment

People in the office have started playing a game during breaks. In this game, the maximum achievable score is 100. Your assignment is to create a simple leaderboard for the break room.

We've provided you with the basic framework of what the leaderboard should look like. Your assignment is to improve this leaderboard in a number of ways to make it usable.

1. On initial page load, the app should fetch the initial state it should display. The leaderboard should be ordered from highest to lowest score.
2. Create a form that allows a user to create a new high score.
3. After creating the new high score, it should be inserted onto the leaderboard in the appropriate place based on the current sorting state.
4. Add the ability to sort by first name, last name, or score. Each should be reversable as well (i.e. sort by score ascending or descending).
5. Unfortunately, the API server is hosted on the receptionist's old computer and is down in the warehouse. It's very unreliable and will return a 503 error for ~20% of the requests. You need to handle those situations gracefully.
6. If, after creating a new score, a new score leader emerges, display an alert. The message should read With a score of SCORE, NAME is the new leader (replacing NAME with the person's name and SCORE with their score).

### Some notes
- Feel free to use any old or new features of React as you are comfortable with. Prefer classes over functions? Go with it. Love hooks? Show us what you've got. You are also allowed to install and use any external packages or upgrade any existing packages you need to get the job done.
- In reality, the API server is hosted by the next js server in this repo. You can make your API requests to http://localhost:3000/api/scores .
- GET http://localhost:3000/api/scores to retrieve the initial leaderboard and POST to http://localhost:3000/api/scores to create a new score entry.
- Even though you are "creating" new high scores by sending a POST request, the server will not persist them. Furthermore, you are not required to make the new scores persist in any way. A successful POST to the server will return a JSON payload including the person's name and the score.
- Act as if the API server code is inaccesable to you. You can't modify it at all.
