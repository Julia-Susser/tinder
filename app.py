from flask import Flask, request, jsonify
from flask import render_template, render_template_string
app = Flask(__name__)
import os
import json
import pyrebase
firebaseConfig = {
    "apiKey": "AIzaSyCbRWiyBegoynT3lDv_14FbD0fadaSim3Q",
    "authDomain": "tinder-34e91.firebaseapp.com",
     "databaseURL": "https://tinder-34e91-default-rtdb.firebaseio.com/",
    "projectId": "tinder-34e91",
    "storageBucket": "tinder-34e91.appspot.com",
    "messagingSenderId": "223258868490",
    "appId": "1:223258868490:web:915fb670330134ef2a58f3",
    "measurementId": "G-8GW1X2NFB8"
  };
firebase = pyrebase.initialize_app(firebaseConfig)

db = firebase.database()
@app.route('/', methods=['post', 'get'])
def hello():
    dir = list(map(lambda x: x, os.listdir("static/img")))
    print(dir)
    dir = {"pics":dir}
    if request.method == 'POST':
        val += 1
        pic = dir[val]
    else:
        val = 0

    return render_template('index.html', dir=dir
    )
@app.route('/send', methods=['post', 'get'])
def send():
    print("here")
    ratings = request.values.get('ratings')
    l = json.loads(ratings)
    t = dict()
    for x, y in l.items():
        t[str(x)] = str(y)
    print(t)
    db.child("ratings").push(ratings) #replaces appending to events variable with firebase db call.
    return "done"

if __name__ == '__main__':
    # Threaded option to enable multiple instances for multiple user access support
    app.run(threaded=True, port=5000)
